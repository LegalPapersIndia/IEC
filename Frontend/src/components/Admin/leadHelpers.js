import * as XLSX from "xlsx";

export const statusStyles = {
  new: "bg-navy-50 text-navy-700 ring-navy-100",
  contacted: "bg-amber-50 text-amber-700 ring-amber-200",
  paid: "bg-violet-50 text-violet-700 ring-violet-200",
  completed: "bg-green-50 text-green-700 ring-green-200",
};

// [clean field, rawPayload (CRM-style) key]
const fields = {
  application: ["application_type", "ddlApplicationType"],
  business: ["business_entity", "txtBusinesEntity"],
  constitution: ["constitution", "ddlConstitution"],
  activity: ["business_activity", "ddlBsinessActivity"],
  description: ["description_business", "txtdescriptionbusiness"],
  incorporation: ["date_of_incorporation", "txtDate"],
  address1: ["address_line1", "txtpaddress"],
  address2: ["address_line2", "txtpaddress2"],
  city: ["city", "txtpcity"],
  state: ["state", "txtpstate"],
  pincode: ["pincode", "txtppincode"],
  branch: ["has_branch", "ddlEntityBranch"],
  sez: ["sez", "firm"],
  pan: ["pan_no", "txtPanNo"],
  email: ["email", "txtemail"],
  mobile: ["contact_no", "txtphone"],
};

// Clean field pehle, nahi to rawPayload (CRM-style key) se
export const getField = (lead, shortName, longName) =>
  lead[shortName] ||
  lead.rawPayload?.[longName] ||
  lead.rawPayload?.[shortName] ||
  "-";

export const get = (lead, key) => getField(lead, ...fields[key]);

export const yesNo = (value) =>
  value === "true" || value === "yes" || value === "Yes" ? "Yes" : "No";

export const formatDateTime = (lead) =>
  new Date(lead.submittedAt || lead.createdAt).toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

export const exportLeadsToExcel = (leads) => {
  const exportData = leads.map((lead) => ({
    "Date & Time": formatDateTime(lead),
    "Application Type": get(lead, "application"),
    "Business Entity": get(lead, "business"),
    Constitution: get(lead, "constitution"),
    "Business Activity": get(lead, "activity"),
    Description: get(lead, "description"),
    "Date of Incorporation": get(lead, "incorporation"),
    "Address Line 1": get(lead, "address1"),
    "Address Line 2": get(lead, "address2"),
    City: get(lead, "city"),
    State: get(lead, "state"),
    Pincode: get(lead, "pincode"),
    "Has Branch": yesNo(get(lead, "branch")),
    SEZ: yesNo(get(lead, "sez")),
    PAN: get(lead, "pan"),
    Email: get(lead, "email"),
    Mobile: get(lead, "mobile"),
    Status: lead.status || "new",
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "IEC_Leads");
  XLSX.writeFile(
    workbook,
    `IEC_Leads_${new Date().toISOString().slice(0, 10)}.xlsx`
  );
};