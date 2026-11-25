// import { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import * as XLSX from "xlsx";
// import {
//   FaSyncAlt,
//   FaFileDownload,
//   FaSignOutAlt,
//   FaSearch,
//   FaExclamationCircle,
// } from "react-icons/fa";

// // ---------- Helpers ----------
// // Clean field pehle, nahi to rawPayload (CRM-style key) se
// const getField = (lead, shortName, longName) =>
//   lead[shortName] ||
//   lead.rawPayload?.[longName] ||
//   lead.rawPayload?.[shortName] ||
//   "-";

// const yesNo = (value) =>
//   value === "true" || value === "yes" || value === "Yes" ? "Yes" : "No";

// const formatDateTime = (lead) =>
//   new Date(lead.submittedAt || lead.createdAt).toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

// const statusStyles = {
//   new: "bg-navy-50 text-navy-700 ring-navy-100",
//   contacted: "bg-amber-50 text-amber-700 ring-amber-200",
//   paid: "bg-violet-50 text-violet-700 ring-violet-200",
//   completed: "bg-green-50 text-green-700 ring-green-200",
// };

// const fields = {
//   application: ["application_type", "ddlApplicationType"],
//   business: ["business_entity", "txtBusinesEntity"],
//   constitution: ["constitution", "ddlConstitution"],
//   activity: ["business_activity", "ddlBsinessActivity"],
//   description: ["description_business", "txtdescriptionbusiness"],
//   incorporation: ["date_of_incorporation", "txtDate"],
//   address1: ["address_line1", "txtpaddress"],
//   address2: ["address_line2", "txtpaddress2"],
//   city: ["city", "txtpcity"],
//   state: ["state", "txtpstate"],
//   pincode: ["pincode", "txtppincode"],
//   branch: ["has_branch", "ddlEntityBranch"],
//   sez: ["sez", "firm"],
//   pan: ["pan_no", "txtPanNo"],
//   email: ["email", "txtemail"],
//   mobile: ["contact_no", "txtphone"],
// };

// const get = (lead, key) => getField(lead, ...fields[key]);

// export default function AdminDashboard() {
//   const [leads, setLeads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [selectedLead, setSelectedLead] = useState(null);

//   const navigate = useNavigate();
//   const API_URL = import.meta.env.VITE_API_URL;

//   const logoutAndRedirect = () => {
//     sessionStorage.removeItem("adminLoggedIn");
//     sessionStorage.removeItem("adminCredentials");
//     navigate("/admin");
//   };

//   const fetchLeads = async () => {
//     setError("");
//     try {
//       const credentials = sessionStorage.getItem("adminCredentials");

//       if (!credentials) {
//         logoutAndRedirect();
//         return;
//       }

//       const response = await fetch(`${API_URL}/api/iec-leads`, {
//         headers: { Authorization: `Basic ${credentials}` },
//       });

//       if (response.status === 401) {
//         logoutAndRedirect();
//         return;
//       }

//       if (!response.ok) throw new Error(`Server Error: ${response.status}`);

//       const data = await response.json();
//       setLeads(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error("Fetch Leads Error:", err);
//       setError("Unable to fetch leads. Please check if the backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
//     const credentials = sessionStorage.getItem("adminCredentials");

//     if (!isLoggedIn || !credentials) {
//       navigate("/admin");
//       return;
//     }

//     fetchLeads();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Escape se modal band
//   useEffect(() => {
//     if (!selectedLead) return;
//     const onKey = (e) => e.key === "Escape" && setSelectedLead(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [selectedLead]);

//   const handleRefresh = () => {
//     setLoading(true);
//     fetchLeads();
//   };

//   const filteredLeads = useMemo(() => {
//     const term = searchTerm.toLowerCase().trim();

//     return leads.filter((lead) => {
//       const matchesSearch =
//         !term ||
//         [
//           get(lead, "business"),
//           get(lead, "pan"),
//           get(lead, "mobile"),
//           get(lead, "email"),
//           get(lead, "state"),
//         ].some((value) => String(value).toLowerCase().includes(term));

//       const matchesStatus =
//         filterStatus === "all" || (lead.status || "new") === filterStatus;

//       return matchesSearch && matchesStatus;
//     });
//   }, [leads, searchTerm, filterStatus]);

//   const exportToExcel = () => {
//     if (filteredLeads.length === 0) {
//       alert("No leads to export!");
//       return;
//     }

//     const exportData = filteredLeads.map((lead) => ({
//       "Date & Time": formatDateTime(lead),
//       "Application Type": get(lead, "application"),
//       "Business Entity": get(lead, "business"),
//       Constitution: get(lead, "constitution"),
//       "Business Activity": get(lead, "activity"),
//       Description: get(lead, "description"),
//       "Date of Incorporation": get(lead, "incorporation"),
//       "Address Line 1": get(lead, "address1"),
//       "Address Line 2": get(lead, "address2"),
//       City: get(lead, "city"),
//       State: get(lead, "state"),
//       Pincode: get(lead, "pincode"),
//       "Has Branch": yesNo(get(lead, "branch")),
//       SEZ: yesNo(get(lead, "sez")),
//       PAN: get(lead, "pan"),
//       Email: get(lead, "email"),
//       Mobile: get(lead, "mobile"),
//       Status: lead.status || "new",
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "IEC_Leads");
//     XLSX.writeFile(
//       workbook,
//       `IEC_Leads_${new Date().toISOString().slice(0, 10)}.xlsx`
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[50vh] flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin h-10 w-10 border-4 border-slate-200 border-t-orange-600 rounded-full mx-auto mb-4"></div>
//           <p className="text-base md:text-lg text-slate-600">
//             Loading IEC leads...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 sm:px-6 py-8 md:py-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">
//               IEC Leads Dashboard
//             </h1>
//             <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
//             <p className="text-slate-600 mt-3 text-sm md:text-base">
//               Total Leads:{" "}
//               <span className="font-semibold text-navy-900">{leads.length}</span>
//               {filteredLeads.length !== leads.length && (
//                 <>
//                   {" "}
//                   • Showing:{" "}
//                   <span className="font-semibold text-navy-900">
//                     {filteredLeads.length}
//                   </span>
//                 </>
//               )}
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2.5">
//             <button
//               onClick={handleRefresh}
//               className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
//             >
//               <FaSyncAlt aria-hidden="true" /> Refresh
//             </button>

//             <button
//               onClick={exportToExcel}
//               className="bg-navy-900 hover:bg-navy-800 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors"
//             >
//               <FaFileDownload aria-hidden="true" /> Export to Excel
//             </button>

//             <button
//               onClick={logoutAndRedirect}
//               className="bg-white border border-red-200 hover:bg-red-50 text-red-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
//             >
//               <FaSignOutAlt aria-hidden="true" /> Logout
//             </button>
//           </div>
//         </div>

//         {/* Error */}
//         {error && (
//           <div
//             role="alert"
//             className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 mb-6 text-sm text-red-800"
//           >
//             <FaExclamationCircle className="mt-0.5 shrink-0" />
//             {error}
//           </div>
//         )}

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
//           <div className="relative flex-1">
//             <FaSearch
//               className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
//               aria-hidden="true"
//             />
//             <input
//               type="text"
//               placeholder="Search by business name, PAN, mobile, email or state..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3.5 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
//             />
//           </div>

//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm md:text-base text-slate-900 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
//           >
//             <option value="all">All Status</option>
//             <option value="new">New</option>
//             <option value="contacted">Contacted</option>
//             <option value="paid">Paid</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         {/* Leads Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-full text-sm">
//               <thead className="bg-navy-900 text-white">
//                 <tr className="text-xs uppercase tracking-wider">
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Date &amp; Time</th>
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Business Name</th>
//                   <th className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">Application</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">PAN</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Mobile</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Email</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">State</th>
//                   <th className="px-4 py-3.5 text-left font-semibold">Status</th>
//                   <th className="px-4 py-3.5 text-center font-semibold">Action</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-200 text-slate-700">
//                 {filteredLeads.length > 0 ? (
//                   filteredLeads.map((lead) => {
//                     const status = lead.status || "new";
//                     return (
//                       <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
//                         <td className="px-4 py-3.5 whitespace-nowrap">
//                           {formatDateTime(lead)}
//                         </td>
//                         <td className="px-4 py-3.5 font-semibold text-navy-900">
//                           {get(lead, "business")}
//                         </td>
//                         <td className="px-4 py-3.5">{get(lead, "application")}</td>
//                         <td className="px-4 py-3.5 whitespace-nowrap uppercase">
//                           {get(lead, "pan")}
//                         </td>
//                         <td className="px-4 py-3.5 whitespace-nowrap">
//                           {get(lead, "mobile")}
//                         </td>
//                         <td className="px-4 py-3.5 break-all">{get(lead, "email")}</td>
//                         <td className="px-4 py-3.5">{get(lead, "state")}</td>
//                         <td className="px-4 py-3.5">
//                           <span
//                             className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ring-1 ${
//                               statusStyles[status] || statusStyles.new
//                             }`}
//                           >
//                             {status.charAt(0).toUpperCase() + status.slice(1)}
//                           </span>
//                         </td>
//                         <td className="px-4 py-3.5 text-center">
//                           <button
//                             onClick={() => setSelectedLead(lead)}
//                             className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
//                           >
//                             View Raw
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 ) : (
//                   <tr>
//                     <td colSpan="9" className="px-4 py-16 text-center text-slate-500 text-base">
//                       No leads found matching your search criteria.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Raw payload modal */}
//       {selectedLead && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label="Lead raw data"
//           className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/60 p-4"
//           onClick={() => setSelectedLead(null)}
//         >
//           <div
//             className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-slate-200 bg-white shadow-xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
//               <h2 className="text-lg font-bold text-navy-900">Lead Raw Data</h2>
//               <button
//                 onClick={() => setSelectedLead(null)}
//                 className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//             <pre className="overflow-auto p-5 text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-pre-wrap break-words">
//               {JSON.stringify(selectedLead.rawPayload || selectedLead, null, 2)}
//             </pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSyncAlt,
  FaFileDownload,
  FaSignOutAlt,
  FaSearch,
  FaExclamationCircle,
} from "react-icons/fa";

import { get, exportLeadsToExcel } from "./leadHelpers";
import LeadsTable from "./LeadsTable";
import LeadDetailsModal from "./LeadDetailsModal";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const logoutAndRedirect = () => {
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminCredentials");
    navigate("/admin");
  };

  const fetchLeads = async () => {
    setError("");
    try {
      const credentials = sessionStorage.getItem("adminCredentials");

      if (!credentials) {
        logoutAndRedirect();
        return;
      }

      const response = await fetch(`${API_URL}/api/iec-leads`, {
        headers: { Authorization: `Basic ${credentials}` },
      });

      if (response.status === 401) {
        logoutAndRedirect();
        return;
      }

      if (!response.ok) throw new Error(`Server Error: ${response.status}`);

      const data = await response.json();
      setLeads(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Leads Error:", err);
      setError("Unable to fetch leads. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
    const credentials = sessionStorage.getItem("adminCredentials");

    if (!isLoggedIn || !credentials) {
      navigate("/admin");
      return;
    }

    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchLeads();
  };

  const filteredLeads = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return leads.filter((lead) => {
      const matchesSearch =
        !term ||
        [
          get(lead, "business"),
          get(lead, "pan"),
          get(lead, "mobile"),
          get(lead, "email"),
          get(lead, "state"),
        ].some((value) => String(value).toLowerCase().includes(term));

      const matchesStatus =
        filterStatus === "all" || (lead.status || "new") === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, filterStatus]);

  const exportToExcel = () => {
    if (filteredLeads.length === 0) {
      alert("No leads to export!");
      return;
    }
    exportLeadsToExcel(filteredLeads);
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-slate-200 border-t-orange-600 rounded-full mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600">
            Loading IEC leads...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">
              IEC Leads Dashboard
            </h1>
            <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500"></span>
            <p className="text-slate-600 mt-3 text-sm md:text-base">
              Total Leads:{" "}
              <span className="font-semibold text-navy-900">{leads.length}</span>
              {filteredLeads.length !== leads.length && (
                <>
                  {" "}
                  • Showing:{" "}
                  <span className="font-semibold text-navy-900">
                    {filteredLeads.length}
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleRefresh}
              className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <FaSyncAlt aria-hidden="true" /> Refresh
            </button>

            <button
              onClick={exportToExcel}
              className="bg-navy-900 hover:bg-navy-800 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors"
            >
              <FaFileDownload aria-hidden="true" /> Export to Excel
            </button>

            <button
              onClick={logoutAndRedirect}
              className="bg-white border border-red-200 hover:bg-red-50 text-red-700 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <FaSignOutAlt aria-hidden="true" /> Logout
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 mb-6 text-sm text-red-800"
          >
            <FaExclamationCircle className="mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search by business name, PAN, mobile, email or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3.5 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm md:text-base text-slate-900 shadow-sm transition duration-200 hover:border-slate-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="paid">Paid</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Leads Table */}
        <LeadsTable leads={filteredLeads} onView={setSelectedLead} />
      </div>

      {/* Lead details popup */}
      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
}