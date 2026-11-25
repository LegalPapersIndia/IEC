import { statusStyles } from "./leadHelpers";

export default function StatusBadge({ status = "new" }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
        statusStyles[status] || statusStyles.new
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}