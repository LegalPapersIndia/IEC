export default function PolicySection({ title, children }) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
      <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}