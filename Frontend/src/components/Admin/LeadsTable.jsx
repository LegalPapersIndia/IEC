import { get, formatDateTime } from "./leadHelpers";
import StatusBadge from "./StatusBadge";

const th = "px-4 py-3.5 text-left font-semibold";

export default function LeadsTable({ leads, onView }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-sm">
          <thead className="bg-navy-900 text-white">
            <tr className="text-xs uppercase tracking-wider">
              <th className={`${th} whitespace-nowrap`}>Date &amp; Time</th>
              <th className={`${th} whitespace-nowrap`}>Business Name</th>
              <th className={`${th} whitespace-nowrap`}>Application</th>
              <th className={th}>PAN</th>
              <th className={th}>Mobile</th>
              <th className={th}>Email</th>
              <th className={th}>State</th>
              <th className={th}>Status</th>
              <th className="px-4 py-3.5 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-slate-700">
            {leads.length > 0 ? (
              leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {formatDateTime(lead)}
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-navy-900">
                    {get(lead, "business")}
                  </td>
                  <td className="px-4 py-3.5">{get(lead, "application")}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap uppercase">
                    {get(lead, "pan")}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {get(lead, "mobile")}
                  </td>
                  <td className="px-4 py-3.5 break-all">{get(lead, "email")}</td>
                  <td className="px-4 py-3.5">{get(lead, "state")}</td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={lead.status || "new"} />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button
                      onClick={() => onView(lead)}
                      className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-16 text-center text-slate-500 text-base">
                  No leads found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}