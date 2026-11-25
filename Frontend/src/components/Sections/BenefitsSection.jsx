import AccordionItem from "../common/AccordionItem";

const listClass = "list-disc pl-6 mt-3 space-y-1.5 marker:text-orange-500";

const leftItems = [
  {
    title: "What is the applicability of IEC?",
    content: (
      <p>
        IEC is mandatory for anyone importing or exporting goods commercially
        in India. It is a 10-digit code issued by DGFT (Directorate General of
        Foreign Trade) and is your key to start an import/export business.
      </p>
    ),
  },
  {
    title: "Can I apply for IEC if I already have one on the same PAN?",
    content: (
      <p>
        IEC is issued against PAN, and one PAN can hold only one IEC. If you
        already have an IEC on your PAN, you should apply for modification /
        update of the existing code instead of a fresh registration.
      </p>
    ),
  },
  {
    title: "Procedure to apply for IEC registration?",
    content: (
      <p>
        Super simple: Fill the online form → Pay securely → Upload documents →
        Get expert help if needed → Receive your IEC certificate by email.
      </p>
    ),
  },
  {
    title: "Can I apply for modification in IEC?",
    content: (
      <p>
        Yes. You can update the name, address, bank details and other details
        of your IEC through the DGFT portal. Our team can also assist you with
        the modification process.
      </p>
    ),
  },
  {
    title: "How to apply for IEC registration?",
    content: (
      <p>
        Fill the form here and pay online, or simply email your documents to{" "}
        <a
          href="mailto:infoieccodeindia@gmail.com"
          className="font-semibold text-navy-700 underline underline-offset-2 hover:text-orange-600"
        >
          infoieccodeindia@gmail.com
        </a>{" "}
        — we will take care of everything.
      </p>
    ),
  },
  {
    title: "What if I don’t know how to fill this form?",
    content: (
      <p>
        No problem. Send your documents and payment to us — our IEC experts
        will fill and submit everything correctly for you.
      </p>
    ),
  },
];

const rightItems = [
  {
    title: "How much time will it take to obtain IEC?",
    content: (
      <p>
        Usually 2–7 working days after submission (most applications are
        completed in 3–5 days), subject to DGFT approval.
      </p>
    ),
  },
  {
    title: "What is the full form of IEC?",
    content: (
      <p>
        IEC stands for Importer Exporter Code — a unique 10-digit business
        identification number required for international trade in India.
      </p>
    ),
  },
  {
    title: "What is the validity of IEC?",
    content: (
      <p>
        IEC has lifetime validity. However, you must confirm / update your IEC
        details on the DGFT portal every year between 1st April and 30th June,
        even if there is no change, otherwise the code may get deactivated.
      </p>
    ),
  },
  {
    title: "Documents required in case of Partnership?",
    content: (
      <>
        <p>Partnership firm needs:</p>
        <ul className={listClass}>
          <li>Firm PAN Card</li>
          <li>Partnership Deed</li>
          <li>PAN &amp; Aadhaar of all partners</li>
          <li>Cancelled cheque (firm account)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Documents required in case of Private Limited or LLP?",
    content: (
      <>
        <p>For Pvt Ltd / LLP:</p>
        <ul className={listClass}>
          <li>Company PAN Card</li>
          <li>Certificate of Incorporation</li>
          <li>PAN &amp; Aadhaar of directors</li>
          <li>Cancelled cheque (company account)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Documents required in case of Proprietor?",
    content: (
      <>
        <p>For Proprietorship:</p>
        <ul className={listClass}>
          <li>Your PAN Card</li>
          <li>Aadhaar Card</li>
          <li>Address proof (electricity bill / rent agreement)</li>
          <li>Cancelled cheque</li>
        </ul>
      </>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-2 md:py-4">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Learn More About IEC Registration in India
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">
          <div className="space-y-4">
            {leftItems.map((item) => (
              <AccordionItem key={item.title} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </div>

          <div className="space-y-4">
            {rightItems.map((item) => (
              <AccordionItem key={item.title} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}