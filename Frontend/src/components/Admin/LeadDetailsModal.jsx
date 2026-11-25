import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { get, yesNo, formatDateTime } from "./leadHelpers";
import StatusBadge from "./StatusBadge";

function DetailItem({ label, value, href, className = "" }) {
  const empty = !value || value === "-";

  return (
    <div className={className}>
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm md:text-[15px] font-medium text-slate-900 break-words">
        {empty ? (
          <span className="text-slate-400">—</span>
        ) : href ? (
          <a
            href={href}
            className="text-navy-700 underline-offset-2 hover:text-orange-600 hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function DetailSection({ title, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
      <h3 className="mb-4 flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-navy-900">
        <span className="h-4 w-1 rounded-full bg-orange-500"></span>
        {title}
      </h3>
      <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        {children}
      </dl>
    </section>
  );
}

export default function LeadDetailsModal({ lead, onClose }) {
  const mobile = get(lead, "mobile");
  const email = get(lead, "email");

  // Escape se popup band
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lead details"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/60 p-3 sm:p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 bg-navy-900 px-5 py-5 sm:px-7">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">
              Lead Details
            </p>
            <h2 className="mt-1 text-lg font-bold leading-snug text-white sm:text-xl break-words">
              {get(lead, "business")}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge status={lead.status || "new"} />
              <span className="text-xs text-slate-300">
                Submitted on {formatDateTime(lead)}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 overflow-y-auto bg-white p-4 sm:p-6">
          <DetailSection title="Application">
            <DetailItem label="Application Type" value={get(lead, "application")} />
            <DetailItem label="Constitution" value={get(lead, "constitution")} />
            <DetailItem label="Business Activity" value={get(lead, "activity")} />
            <DetailItem
              label="Date of Incorporation"
              value={get(lead, "incorporation")}
            />
            <DetailItem label="Has Branch" value={yesNo(get(lead, "branch"))} />
            <DetailItem label="SEZ" value={yesNo(get(lead, "sez"))} />
            <DetailItem
              label="Description of Business"
              value={get(lead, "description")}
              className="sm:col-span-2"
            />
          </DetailSection>

          <DetailSection title="Contact">
            <DetailItem
              label="PAN Number"
              value={String(get(lead, "pan")).toUpperCase()}
            />
            <DetailItem
              label="Mobile"
              value={mobile}
              href={mobile !== "-" ? `tel:${mobile}` : undefined}
            />
            <DetailItem
              label="Email"
              value={email}
              href={email !== "-" ? `mailto:${email}` : undefined}
              className="sm:col-span-2"
            />
          </DetailSection>

          <DetailSection title="Principal Place of Business">
            <DetailItem label="Address Line 1" value={get(lead, "address1")} />
            <DetailItem label="Address Line 2" value={get(lead, "address2")} />
            <DetailItem label="City" value={get(lead, "city")} />
            <DetailItem label="State" value={get(lead, "state")} />
            <DetailItem label="Pincode" value={get(lead, "pincode")} />
          </DetailSection>

          {/* Raw JSON (collapsed) */}
          <details className="group rounded-xl border border-slate-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
              Show raw JSON
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-lg leading-none text-navy-700 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <pre className="max-h-64 overflow-auto border-t border-slate-100 p-4 text-xs leading-relaxed text-slate-700 whitespace-pre-wrap break-words">
              {JSON.stringify(lead.rawPayload || lead, null, 2)}
            </pre>
          </details>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <button
            onClick={onClose}
            className="rounded-lg bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}