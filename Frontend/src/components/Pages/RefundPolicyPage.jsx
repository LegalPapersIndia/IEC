const bullet = (
  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"></span>
);

const sectionClass =
  "bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200";

export default function RefundPolicyPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Refund Policy
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-sm md:text-base text-slate-500">
            Last Updated: March 07, 2026
          </p>
        </div>

        {/* Summary Banner */}
        <div className="bg-orange-50 border border-orange-200 border-l-4 border-l-orange-500 p-6 md:p-8 rounded-xl mb-10 text-slate-800">
          <p className="text-base md:text-lg font-bold text-navy-900 mb-2">
            Quick Summary
          </p>

          <p className="leading-relaxed mb-4">
            We offer a fair and transparent refund policy for our consultancy
            services. Refunds are processed only when we are unable to provide
            the committed service due to our fault.
          </p>

          <p className="leading-relaxed">
            You can reach our grievance/redressal team anytime. We aim to
            resolve refund requests within <strong>7 working days</strong>{" "}
            after assessment.
          </p>
        </div>

        {/* Main Policy */}
        <div className="space-y-6 md:space-y-8">
          {/* Refund Commitment */}
          <section className={sectionClass}>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              Refund Commitment
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              You can easily reach us with your grievance. Our refund
              department will assess the matter and if it finds non-catering of
              services on our part, we’ll gladly refund your payment within{" "}
              <strong>7 working days</strong> from the date of refund request.
            </p>

            <p className="text-slate-700 leading-relaxed">
              We have a <strong>money-back guarantee policy</strong> if we are
              unable to process the application as committed by us.
            </p>
          </section>

          {/* Important Notes */}
          <section className={sectionClass}>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-5">
              Important Notes
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                {bullet}
                <span>
                  <strong>No refund shall be issued</strong> if you have
                  already availed any complimentary service or discount offer
                  attached to the paid service.
                </span>
              </li>

              <li className="flex items-start gap-3">
                {bullet}
                <span>
                  <strong>INR 300 (administrative charges)</strong> will be
                  deducted if the application is unprocessable due to
                  non-submission of required documents, non-cooperation, or any
                  other reason restricting us from processing.
                </span>
              </li>

              <li className="flex items-start gap-3">
                {bullet}
                <span>
                  <strong>No refund</strong> if we processed the
                  registration/application as per government guidelines but
                  issuance is delayed by government authorities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                {bullet}
                <span>
                  Any <strong>government fee, duty, or challan</strong> paid by
                  us will be deducted from the refund amount.
                </span>
              </li>
            </ul>
          </section>

          {/* How to Request */}
          <section className={sectionClass}>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
              How to Request a Refund
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              If you believe you are eligible for a refund based on the above
              policy:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-slate-700 marker:font-semibold marker:text-orange-600">
              <li>
                Contact us via email at{" "}
                <strong>info@india-iecregistration.org</strong> or call{" "}
                <strong>+91-9211037448</strong>.
              </li>

              <li>
                Clearly mention your order/reference number, date of payment,
                and reason for refund request.
              </li>

              <li>
                Our team will review your case within{" "}
                <strong>2–3 working days</strong>.
              </li>

              <li>
                If approved, refund will be processed to your original payment
                method within <strong>7 working days</strong>.
              </li>
            </ol>
          </section>

          {/* Final Note */}
          <section className="bg-navy-50 rounded-xl p-6 md:p-8 text-center border border-navy-100">
            <p className="text-base md:text-lg text-navy-900 font-medium">
              We value your trust and are committed to providing fair and
              transparent services. Thank you for choosing us for your IEC
              registration needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}