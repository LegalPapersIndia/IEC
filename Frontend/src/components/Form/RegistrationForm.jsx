import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import FormField from "./FormField";
import GradientButton from "../common/GradientButton";

const applicationTypes = ["IEC Registration", "IEC Modification", "IEC Renewal"];

const constitutions = [
  "Proprietorship",
  "Partnership Firm",
  "Limited Liability Partnership",
  "Private Limited",
  "OPC",
  "Public Limited",
  "Govt. Undertaking",
  "Section 8 Company",
  "Registered Society",
  "Trust",
  "HUF",
];

const businessActivities = [
  "Merchant Exporter",
  "Manufacturer Exporter",
  "Merchant cum Manufacturer Exporter",
  "Service Provider",
  "Merchant cum Service Provider",
  "Manufacturer cum Service Provider",
  "Merchant cum Manufacturer cum Service Provider",
  "Others",
];

const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

const initialFormData = {
  application_type: "",
  business_entity: "",
  constitution: "",
  description_business: "",
  business_activity: "",
  date_of_incorporation: "",
  address_line1: "",
  address_line2: "",
  city: "",
  state: "",
  pincode: "",
  has_branch: "",
  pan_no: "",
  email: "",
  contact_no: "",
  sez: "No",
};

// ---------- Session helpers ----------
const readJson = (key) => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// Payment page se submit hua payload wapas form fields mein convert karo
const mapSubmittedToForm = (p) => ({
  application_type: p.ddlApplicationType || "",
  business_entity: p.txtBusinesEntity?.trim() || "",
  constitution: p.ddlConstitution || "",
  description_business: p.txtdescriptionbusiness?.trim() || "",
  business_activity: p.ddlBsinessActivity || "",
  date_of_incorporation: p.txtDate
    ? p.txtDate.split("-").reverse().join("-") // DD-MM-YYYY → YYYY-MM-DD
    : "",
  address_line1: p.txtpaddress?.trim() || "",
  address_line2: p.txtpaddress2?.trim() || "",
  city: p.txtpcity?.trim() || "",
  state: p.txtpstate || "",
  pincode: p.txtppincode || "",
  pan_no: p.txtPanNo?.trim().toUpperCase() || "",
  email: p.txtemail?.trim() || "",
  contact_no: p.txtphone || "",
  has_branch: p.ddlEntityBranch === "true" ? "Yes" : "No",
  sez: p.firm === "yes" ? "Yes" : "No",
});

const getInitialState = () => {
  // Payment page par "Edit" dabaya ho
  if (sessionStorage.getItem("iecEditFromPayment") === "true") {
    const submitted = readJson("iecSubmittedData");
    const expired =
      submitted?._timestamp &&
      Date.now() - submitted._timestamp > 60 * 60 * 1000; // 1 hour

    if (submitted && !expired) {
      return {
        data: { ...initialFormData, ...mapSubmittedToForm(submitted) },
        alert: {
          type: "success",
          message: "Previous details loaded for editing.",
        },
      };
    }
    return {
      data: initialFormData,
      alert: {
        type: "error",
        message: "Could not load previous data. Please start fresh.",
      },
    };
  }

  // Normal case: unsaved draft
  const draft = readJson("iecFormDraft");
  return {
    data: draft ? { ...initialFormData, ...draft } : initialFormData,
    alert: null,
  };
};

// ---------- Alert box ----------
const statusStyles = {
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  error: "bg-red-50 border-red-200 text-red-800",
};

function StatusBox({ type, title, children, role = "alert" }) {
  const Icon =
    type === "success"
      ? FaCheckCircle
      : type === "warning"
      ? FaExclamationTriangle
      : FaExclamationCircle;

  return (
    <div
      role={role}
      className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
        statusStyles[type] || statusStyles.error
      }`}
    >
      <Icon className="mt-0.5 shrink-0" />
      <div>
        {title && <strong className="block font-semibold">{title}</strong>}
        {children}
      </div>
    </div>
  );
}

export default function RegistrationForm() {
  const [initial] = useState(getInitialState);
  const [formData, setFormData] = useState(initial.data);
  const [formAlert, setFormAlert] = useState(initial.alert);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const firstErrorRef = useRef(null);
  const navigate = useNavigate();

  // Edit-mode flag sirf ek baar use hota hai
  useEffect(() => {
    if (sessionStorage.getItem("iecEditFromPayment") === "true") {
      sessionStorage.removeItem("iecEditFromPayment");
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    sessionStorage.setItem("iecFormDraft", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes + formatting
  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "pan_no")
      processedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
    if (name === "contact_no")
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "pincode")
      processedValue = value.replace(/\D/g, "").slice(0, 6);

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formAlert) setFormAlert(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.application_type) newErrors.application_type = "Required";
    if (!formData.business_entity.trim()) newErrors.business_entity = "Required";
    if (!formData.constitution) newErrors.constitution = "Required";
    if (!formData.business_activity) newErrors.business_activity = "Required";
    if (!formData.address_line1.trim()) newErrors.address_line1 = "Required";
    if (!formData.state) newErrors.state = "State is required";

    if (!formData.pan_no) newErrors.pan_no = "Required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan_no))
      newErrors.pan_no = "Invalid PAN format (e.g. ABCDE1234F)";

    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.contact_no) newErrors.contact_no = "Required";
    else if (!/^[6-9]\d{9}$/.test(formData.contact_no))
      newErrors.contact_no = "10 digits starting with 6-9";

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "6 digits required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) firstErrorRef.current = el;
    }

    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormAlert(null);

    if (!validateForm()) {
      setFormAlert({
        type: "error",
        message: "Please fill all required fields correctly.",
      });
      setTimeout(() => {
        if (firstErrorRef.current) {
          firstErrorRef.current.focus();
          firstErrorRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 150);
      return;
    }

    setLoading(true);

    const payload = {
      serviceCategory: "iecReg",
      leadSource: "india-iecregistration.org",
      ddlApplicationType: formData.application_type || "",
      txtBusinesEntity: formData.business_entity.trim() || "",
      ddlConstitution: formData.constitution || "",
      txtdescriptionbusiness: formData.description_business?.trim() || "",
      ddlBsinessActivity: formData.business_activity || "",
      txtDate: formatDate(formData.date_of_incorporation),
      txtpaddress: formData.address_line1?.trim() || "",
      txtpaddress2: formData.address_line2?.trim() || "",
      txtpcity: formData.city?.trim() || "",
      txtpstate: formData.state || "",
      txtppincode: formData.pincode || "",
      txtPanNo: formData.pan_no?.trim().toUpperCase() || "",
      txtemail: formData.email?.trim() || "",
      txtphone: formData.contact_no?.trim() || "",
      firm: formData.sez === "Yes" ? "yes" : "no",
      ddlEntityBranch: formData.has_branch === "Yes" ? "true" : "false",
      _timestamp: Date.now(),
      _formVersion: "2025-03",
    };

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      // 1. Apne backend mein save (important)
      const backendPromise = fetch(`${API_URL}/api/iec`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. CRM pe bhi parallel mein bhejo
      const crmPromise = fetch(
        "https://legalpapers.konceptsoftwaresolutions.com/leadRoutes",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        }
      );

      const [backendRes, crmRes] = await Promise.allSettled([
        backendPromise,
        crmPromise,
      ]);

      const backendSuccess =
        backendRes.status === "fulfilled" && backendRes.value.ok;

      if (!backendSuccess) {
        console.warn("Backend save failed:", backendRes);
      }

      if (
        crmRes.status === "rejected" ||
        (crmRes.status === "fulfilled" && !crmRes.value.ok)
      ) {
        console.warn("CRM submission failed:", crmRes);
      }

      // Payment page + edit ke liye
      sessionStorage.setItem("iecSubmittedData", JSON.stringify(payload));
      sessionStorage.removeItem("iecFormDraft");

      if (backendSuccess) {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully! Redirecting...",
        });
      } else {
        setSubmitStatus({
          type: "warning",
          message: "Data saved locally. Redirecting...",
        });
      }

      setTimeout(() => {
        navigate("/payment-summary");
      }, 1500);
    } catch (err) {
      console.error("Critical error during submission:", err);

      sessionStorage.setItem("iecSubmittedData", JSON.stringify(payload));
      sessionStorage.removeItem("iecFormDraft");

      setSubmitStatus({
        type: "warning",
        message: "Submitted with some issues. Redirecting to payment...",
      });

      setTimeout(() => {
        navigate("/payment-summary");
      }, 1800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="registration-form"
      className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200"
    >
      <div className="bg-navy-900 px-6 py-5 md:px-10 flex items-center gap-4">
        <span className="h-8 w-1.5 rounded-full bg-orange-500"></span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white">
          IEC REGISTRATION FORM
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="p-5 sm:p-8 lg:p-10 space-y-6 md:space-y-8"
      >
        {formAlert && (
          <StatusBox
            type={formAlert.type}
            title={formAlert.type === "success" ? "Success!" : "Error!"}
          >
            {formAlert.message}
          </StatusBox>
        )}

        {submitStatus.message && (
          <StatusBox type={submitStatus.type} role="status">
            {submitStatus.message}
          </StatusBox>
        )}

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
          <FormField
            label="1. Application Type"
            name="application_type"
            type="select"
            options={applicationTypes}
            value={formData.application_type}
            onChange={handleChange}
            required
            error={errors.application_type}
          />

          <FormField
            label="2. Name of Business Entity"
            name="business_entity"
            value={formData.business_entity}
            onChange={handleChange}
            required
            placeholder="Name as per PAN"
            error={errors.business_entity}
          />

          <FormField
            label="3. Constitution"
            name="constitution"
            type="select"
            options={constitutions}
            value={formData.constitution}
            onChange={handleChange}
            required
            error={errors.constitution}
            className="md:col-span-2"
          />

          <FormField
            label="4. Description of Business"
            name="description_business"
            type="textarea"
            value={formData.description_business}
            onChange={handleChange}
            rows={3}
            placeholder="Briefly describe your business activities"
            className="md:col-span-2"
          />

          <FormField
            label="5. Business Activity"
            name="business_activity"
            type="select"
            options={businessActivities}
            value={formData.business_activity}
            onChange={handleChange}
            required
            error={errors.business_activity}
          />

          <FormField
            label="6. Date of Incorporation"
            name="date_of_incorporation"
            type="date"
            value={formData.date_of_incorporation}
            onChange={handleChange}
          />
        </div>

        {/* Principal Place of Business */}
        <div className="space-y-5 rounded-xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
          <div>
            <p className="text-base font-bold text-navy-900">
              7. Principal Place of Business
            </p>
            <p className="mt-0.5 text-xs text-slate-500">State is mandatory</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              label="Address Line 1"
              name="address_line1"
              placeholder="Shop No. / Building / Street"
              value={formData.address_line1}
              onChange={handleChange}
              required
              error={errors.address_line1}
            />
            <FormField
              label="Address Line 2"
              name="address_line2"
              placeholder="Area / Locality / Landmark"
              value={formData.address_line2}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <FormField
              label="City"
              name="city"
              placeholder="City / Town"
              value={formData.city}
              onChange={handleChange}
            />
            <FormField
              label="State"
              name="state"
              type="select"
              options={indianStates}
              value={formData.state}
              onChange={handleChange}
              required
              error={errors.state}
            />
            <FormField
              label="Pincode"
              name="pincode"
              placeholder="6-digit pincode"
              value={formData.pincode}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={6}
              error={errors.pincode}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
          <FormField
            label="8. Do you have any branch?"
            name="has_branch"
            type="select"
            options={["Yes", "No"]}
            value={formData.has_branch}
            onChange={handleChange}
            error={errors.has_branch}
          />

          <FormField
            label="9. PAN No."
            name="pan_no"
            value={formData.pan_no}
            onChange={handleChange}
            required
            placeholder="ABCDE1234F"
            maxLength={10}
            error={errors.pan_no}
          />

          <FormField
            label="10. Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="yourname@example.com"
            error={errors.email}
          />

          <FormField
            label="11. Contact No."
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            required
            placeholder="10-digit number"
            inputMode="numeric"
            maxLength={10}
            error={errors.contact_no}
          />
        </div>

        {/* SEZ */}
        <fieldset className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
          <legend className="px-1 text-base font-bold text-navy-900">
            Special Economic Zone (SEZ)?
          </legend>
          <div className="mt-2 flex flex-wrap gap-8">
            {["Yes", "No"].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-slate-700"
              >
                <input
                  type="radio"
                  name="sez"
                  value={opt}
                  checked={formData.sez === opt}
                  onChange={handleChange}
                  className="h-4 w-4 accent-orange-600"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="pt-4 flex justify-center">
          <GradientButton
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto text-base py-4 sm:px-16"
          >
            {loading ? "Processing..." : "Submit Application →"}
          </GradientButton>
        </div>
      </form>
    </div>
  );
}