export default function AccordionItem({ title, children }) {
  return (
    <details className="group bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-navy-200 hover:shadow-md open:border-navy-200 open:shadow-md">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 list-none cursor-pointer rounded-xl group-open:rounded-b-none font-semibold text-[15px] md:text-base text-navy-900 transition-colors group-open:bg-navy-50 [&::-webkit-details-marker]:hidden">
        {title}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-navy-700 transition-all duration-300 group-open:rotate-45 group-open:bg-orange-600 group-open:text-white">
          +
        </span>
      </summary>

      <div className="border-t border-slate-100 px-5 md:px-6 pb-5 pt-4 text-sm md:text-[15px] leading-relaxed text-slate-600">
        {children}
      </div>
    </details>
  );
}