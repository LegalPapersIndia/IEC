import AccordionItem from "../common/AccordionItem";

const listClass = "list-disc pl-6 mt-2 space-y-1 marker:text-orange-500";

const leftFaqs = [
  {
    title: "What is IEC (Import Export Code)?",
    content: (
      <p>
        IEC is a unique 10-digit code issued by the Directorate General of
        Foreign Trade (DGFT), Government of India. It is required by
        individuals and businesses involved in the import or export of goods.
      </p>
    ),
  },
  {
    title: "Who needs an IEC?",
    content: (
      <p>
        Any individual or business planning to import or export goods
        commercially must have an IEC. It is essential for customs clearance of
        import / export consignments.
      </p>
    ),
  },
  {
    title: "Is IEC mandatory for service exporters too?",
    content: (
      <p>
        IEC is generally not compulsory for exporting services. However, it is
        required if you wish to claim benefits under the Foreign Trade Policy,
        and many service exporters obtain it for convenience.
      </p>
    ),
  },
  {
    title: "Is GST mandatory for IEC registration?",
    content: (
      <p>
        No, GST registration is not compulsory for obtaining an IEC. However,
        if your business is GST-registered, the details must match with the
        DGFT database.
      </p>
    ),
  },
  {
    title: "What is the validity of IEC?",
    content: (
      <p>
        IEC has lifetime validity. However, you must confirm / update your IEC
        details on the DGFT portal every year between 1st April and 30th June,
        even if there is no change.
      </p>
    ),
  },
  {
    title: "Can individuals apply for IEC?",
    content: (
      <p>
        Yes. Individuals can also apply for an IEC, even if they are not
        operating under a registered company. A proprietorship is registered on
        the individual’s PAN.
      </p>
    ),
  },
  {
    title: "Can one PAN have more than one IEC?",
    content: (
      <p>
        No. IEC is issued against PAN and only one IEC can exist per PAN. If
        you already have one, apply for modification / update of the existing
        code.
      </p>
    ),
  },
];

const rightFaqs = [
  {
    title: "What documents are required for IEC registration?",
    content: (
      <>
        <p>Commonly required documents include:</p>
        <ul className={listClass}>
          <li>PAN Card of the entity / applicant</li>
          <li>Aadhaar of the proprietor / partners / directors</li>
          <li>Address proof of the business premises</li>
          <li>Cancelled cheque or bank certificate</li>
          <li>Email ID and mobile number of the applicant</li>
        </ul>
      </>
    ),
  },
  {
    title: "How long does it take to get an IEC?",
    content: (
      <p>
        Once the application is submitted with correct details and documents,
        IEC is usually issued within a few working days, subject to DGFT
        approval.
      </p>
    ),
  },
  {
    title: "Can I modify or update my IEC details?",
    content: (
      <p>
        Yes. You can update your IEC information such as name, address, bank
        details and branches through the DGFT portal whenever necessary. Our
        team can also assist you with it.
      </p>
    ),
  },
  {
    title: "What happens if I don’t update my IEC every year?",
    content: (
      <p>
        If the annual update is missed, your IEC may get deactivated on the
        DGFT portal, which can affect customs clearance until it is
        reactivated by updating the details.
      </p>
    ),
  },
  {
    title: "Which types of entities can apply for IEC?",
    content: (
      <>
        <p>IEC can be obtained by:</p>
        <ul className={listClass}>
          <li>Proprietorship</li>
          <li>Partnership Firm / LLP</li>
          <li>Private Limited / Public Limited / OPC</li>
          <li>HUF, Trust, Society and Section 8 Company</li>
        </ul>
      </>
    ),
  },
  {
    title: "Do I need a separate IEC for each branch?",
    content: (
      <p>
        No. One IEC per PAN covers the entire entity. Details of branches can
        be added in the IEC application or modification.
      </p>
    ),
  },
  {
    title: "Are the fees on this portal government fees?",
    content: (
      <p>
        No. This is a private consultancy portal and the fees charged here are
        consultancy charges for assisting you with the IEC application. The
        government fee, if applicable, is payable separately.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-2 md:py-4">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            IEC Registration – Frequently Asked Questions
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-4 lg:gap-6">
          <div className="space-y-4">
            {leftFaqs.map((faq) => (
              <AccordionItem key={faq.title} title={faq.title}>
                {faq.content}
              </AccordionItem>
            ))}
          </div>

          <div className="space-y-4">
            {rightFaqs.map((faq) => (
              <AccordionItem key={faq.title} title={faq.title}>
                {faq.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}