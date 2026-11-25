import PolicySection from "../common/PolicySection";

const listClass =
  "list-disc pl-6 space-y-2 text-slate-700 marker:text-orange-500";

const useCases = [
  "To provide consultancy services for IEC Registration, modification, renewal, and related assistance.",
  "To communicate with you regarding your application and service updates.",
  "To process payments and issue invoices/receipts.",
  "To improve our website and services.",
  "To comply with legal obligations, if required.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-sm md:text-base text-slate-500">
            Last Updated: April 08, 2026
          </p>
        </div>

        {/* Summary Banner */}
        <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 p-6 md:p-8 rounded-xl mb-10 text-slate-800">
          <p className="text-base md:text-lg font-bold text-navy-900 mb-2">
            Your Privacy Matters
          </p>
          <p className="leading-relaxed">
            We are committed to protecting your personal information. This
            Privacy Policy explains how we collect, use, store, and protect
            your data when you use our services.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          <PolicySection title="Introduction">
            <p className="text-slate-700 leading-relaxed">
              www.india-iecregistration.org is a privately owned online portal
              operated by a professional consultancy firm. This Privacy Policy
              governs the collection, use, and disclosure of your personal
              information when you visit our website or avail our consultancy
              services for IEC Registration and related services.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className={listClass}>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, PAN card number, GSTIN, business name, address,
                and other details you provide in the registration form.
              </li>
              <li>
                <strong>Business Information:</strong> Details related to your
                import/export business required for IEC application.
              </li>
              <li>
                <strong>Payment Information:</strong> We do not store complete
                payment card details. Payments are processed securely through
                third-party payment gateways.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and usage data collected through
                cookies.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <ul className="space-y-3 text-slate-700">
              {useCases.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Information Sharing & Disclosure">
            <p className="text-slate-700 leading-relaxed mb-4">
              We do <strong>not</strong> sell, rent, or trade your personal
              information to third parties for marketing purposes.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              We may share your information only in the following cases:
            </p>
            <ul className={listClass}>
              <li>
                With trusted service providers who assist us in delivering our
                consultancy services (under strict confidentiality agreements).
              </li>
              <li>
                When required by law or government authorities for IEC-related
                processing.
              </li>
              <li>To protect our rights, privacy, safety, or property.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Security">
            <p className="text-slate-700 leading-relaxed">
              We take reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet
              or electronic storage is 100% secure. We cannot guarantee
              absolute security.
            </p>
          </PolicySection>

          <PolicySection title="Cookies and Tracking Technologies">
            <p className="text-slate-700 leading-relaxed">
              Our website uses cookies to enhance user experience, analyze
              website traffic, and remember your preferences. You can control
              cookie settings through your browser. However, disabling cookies
              may affect some functionalities of the website.
            </p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className={listClass}>
              <li>Access, update, or correct your personal information</li>
              <li>
                Request deletion of your data (subject to legal and legitimate
                business requirements)
              </li>
              <li>
                Withdraw consent for processing your data (where applicable)
              </li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy,
              or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-navy-50 p-5 rounded-lg border border-navy-100">
              <p className="font-medium text-slate-800 leading-relaxed">
                Email: <strong>info@india-iecregistration.org</strong>
                <br />
                Phone: <strong>+91-9211037448</strong>
              </p>
            </div>
          </PolicySection>

          {/* Final Note */}
          <section className="bg-navy-50 rounded-xl p-6 md:p-8 text-center border border-navy-100">
            <p className="text-base md:text-lg text-navy-900 font-medium">
              We are committed to safeguarding your privacy and building
              long-term trust with our clients. Thank you for trusting us with
              your IEC registration needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}