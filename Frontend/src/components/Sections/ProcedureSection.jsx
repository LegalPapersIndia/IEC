import fill from "../../Assest/2.png";
import pay from "../../Assest/3.png";
import docu from "../../Assest/4.png";
import certi from "../../Assest/6.png";

export default function ProcedureSection() {
  const steps = [
    {
      number: "1",
      title: "Fill Application Form",
      description:
        "Enter your business and personal details in a simple online form.",
      imageSrc: fill,
      iconClass: "w-12 h-12 md:w-14 md:h-14",
    },
    {
      number: "2",
      title: "Make Secure Payment",
      description:
        "Pay the consultancy fee securely via UPI, card, net banking or wallet.",
      imageSrc: pay,
      iconClass: "w-12 h-12 md:w-14 md:h-14",
    },
    {
      number: "3",
      title: "Upload Documents",
      description:
        "Securely upload PAN, Aadhaar, bank proof, address proof and other required documents.",
      imageSrc: docu,
      iconClass: "w-12 h-12 md:w-14 md:h-14",
    },
    {
      number: "4",
      title: "Get IEC Certificate",
      description:
        "Receive your official IEC code and certificate on your email.",
      imageSrc: certi,
      iconClass: "w-12 h-12 md:w-14 md:h-14",
    },
  ];

  return (
    <section id="procedure" className="py-2 md:py-4">
      <div className="w-full">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-4xl mx-auto">
            Easy 4-Step Process to Get Your IEC Certificate
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Complete your Import Export Code registration online with a simple,
            fast and hassle-free process.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative mx-auto mb-6 w-fit">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-navy-800 flex items-center justify-center shadow-md mx-auto ring-4 ring-navy-100">
                    <img
                      src={step.imageSrc}
                      alt={`Step ${step.number} - ${step.title}`}
                      className={`${step.iconClass} object-contain`}
                    />
                  </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm md:text-base shadow ring-2 ring-white">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-2 text-center tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-center text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-[42px] w-9 h-9 -translate-y-1/2 z-20">
                    <div className="w-full h-full rounded-full bg-white border border-slate-200 text-orange-600 flex items-center justify-center font-bold text-lg shadow-sm">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-14">
          <p className="text-slate-700 text-base md:text-lg font-medium">
            Most applications are processed in{" "}
            <span className="text-orange-600 font-bold">1–3 working days</span>.
          </p>
          <p className="mt-1 text-slate-500 text-sm md:text-base">
            100% online process – No office visit required
          </p>
        </div>
      </div>
    </section>
  );
}