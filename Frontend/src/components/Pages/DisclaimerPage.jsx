export default function DisclaimerPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-navy-900 text-white py-8 md:py-10 px-6 md:px-10 text-center">
          <span className="mx-auto mb-4 block h-1 w-12 rounded-full bg-orange-500"></span>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Disclaimer Policy
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            Important Information About Our Services
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 lg:p-12 text-slate-700 leading-relaxed">
          {/* Consultancy Notice */}
          <p className="text-base md:text-lg mb-6">
            <strong className="text-orange-700">
              Fee charged by us on this portal is purely consultancy in nature.
            </strong>
          </p>

          {/* Main Legal Notice */}
          <div className="bg-navy-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-8">
            <p className="font-semibold text-navy-900 text-base md:text-lg">
              www.india-iecregistration.org IS A PRIVATELY OWNED ONLINE PORTAL
              AND IN NO WAY REPRESENTS ANY RELATION WITH ANY GOVERNMENT
              AUTHORITY OR BODY.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              This portal is owned and operated by a private consultancy firm
              and in no way represents any affiliation, association, or
              connection with the Directorate General of Foreign Trade (DGFT)
              or any other Government authority of India.
            </p>

            <p>
              This is <strong>not</strong> an official Government-run website.
              The registration form available on this portal is{" "}
              <strong>not</strong> the official Government application form. It
              is solely designed to collect preliminary information from
              prospective clients so that our consultants can better understand
              their business requirements and provide appropriate guidance and
              assistance.
            </p>

            <p>
              We provide professional consultancy services to assist clients in
              the process of:
            </p>

            <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
              <li>IEC (Importer Exporter Code) Registration</li>
              <li>IEC Modification / Amendment</li>
              <li>IEC Renewal / updation</li>
              <li>Form filling and document preparation guidance</li>
              <li>Submission support and follow-up assistance</li>
            </ul>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm md:text-base text-slate-600">
                All fees charged through this portal are towards professional
                consultancy services only. They do <strong>not</strong> include
                any official Government fees, which may be payable separately
                through official channels if applicable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}