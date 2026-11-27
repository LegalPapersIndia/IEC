// import {
//   FaGraduationCap,
//   FaGlobe,
//   FaLightbulb,
//   FaBullseye,
//   FaBookOpen,
//   FaLaptop,
//   FaHandshake,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const iconBox =
//   "flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto";

// const cardClass =
//   "bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200";

// const offers = [
//   {
//     icon: FaGraduationCap,
//     title: "Expert Training Programs",
//     text: "Step-by-step guidance on how to start, manage, and scale import-export businesses. Covering documentation, compliance, logistics, international marketing, and more.",
//   },
//   {
//     icon: FaGlobe,
//     title: "Global Business Focus",
//     text: "Practical knowledge to help you enter international markets confidently. We train you on global trade practices, buyer-seller networking, and cross-border opportunities.",
//   },
// ];

// const whyChoose = [
//   {
//     icon: FaBookOpen,
//     title: "Practical & Updated Curriculum",
//     text: "Real-world knowledge aligned with current DGFT, customs, and global trade rules.",
//   },
//   {
//     icon: FaLaptop,
//     title: "Flexible Learning Modes",
//     text: "Learn through online live sessions or offline classroom training as per your convenience.",
//   },
//   {
//     icon: FaHandshake,
//     title: "Dedicated Support",
//     text: "Personal guidance from experienced professionals to help you implement what you learn.",
//   },
// ];

// export default function AboutUsPage() {
//   return (
//     <div className="py-10 md:py-14">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
//             About Us
//           </h1>
//           <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
//           <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
//             Empowering businesses to go global through expert Import-Export
//             training and guidance.
//           </p>
//         </div>

//         {/* Introduction */}
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 mb-12 md:mb-16">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
//               Welcome to EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED
//             </h2>
//             <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
//               We are a dedicated consultancy firm specializing in{" "}
//               <strong>Import and Export Training Programs</strong>. Our mission
//               is to equip startups and established businesses with the
//               knowledge, skills, and practical strategies needed to succeed in
//               international trade and global business.
//             </p>
//             <p className="text-base md:text-lg text-slate-600 leading-relaxed">
//               Whether you are just starting your import-export journey or
//               looking to expand your existing business globally, we provide
//               comprehensive training through both{" "}
//               <strong>online and offline modes</strong> — making learning
//               flexible, accessible, and result-oriented.
//             </p>
//           </div>
//         </div>

//         {/* What We Offer */}
//         <div className="mb-12 md:mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 mb-8 md:mb-10">
//             What We Offer
//           </h2>

//           <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
//             {offers.map(({ icon: Icon, title, text }) => (
//               <div key={title} className={`${cardClass} text-center`}>
//                 <div className={iconBox}>
//                   <Icon size={26} />
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
//                   {title}
//                 </h3>
//                 <p className="text-slate-600 text-sm md:text-base leading-relaxed">
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vision & Mission */}
//         <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12 md:mb-16">
//           <div className={cardClass}>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-orange-50 text-orange-600 rounded-xl ring-1 ring-orange-100">
//                 <FaLightbulb size={22} />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-navy-900">
//                 Our Vision
//               </h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               To become the most trusted partner for Indian businesses aspiring
//               to succeed in global trade by providing world-class import-export
//               education and support.
//             </p>
//           </div>

//           <div className={cardClass}>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-orange-50 text-orange-600 rounded-xl ring-1 ring-orange-100">
//                 <FaBullseye size={22} />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-navy-900">
//                 Our Mission
//               </h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               To simplify the complexities of international business through
//               practical, hands-on training and make global opportunities
//               accessible to every motivated entrepreneur and business in India.
//             </p>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
//             Why Choose EASRISE Legalpapers Management?
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//             {whyChoose.map(({ icon: Icon, title, text }) => (
//               <div
//                 key={title}
//                 className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 text-center"
//               >
//                 <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-600 text-white">
//                   <Icon size={24} />
//                 </div>
//                 <h3 className="font-bold text-lg mb-2">{title}</h3>
//                 <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Teaser */}
//         <div className="text-center mb-10">
//           <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
//             At EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED, we don’t
//             just teach import-export — we prepare you to build a successful
//             global business with confidence.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
//             Ready to Get Started?
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center max-w-xl mx-auto mb-8">
//             <a
//               href="tel:+919211037448"
//               className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
//             >
//               <FaPhoneAlt className="text-orange-600" />
//               <span className="font-medium">+91 9211037448</span>
//             </a>
//             <a
//               href="mailto:info@india-iecregistration.org"
//               className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
//             >
//               <FaEnvelope className="text-orange-600" />
//               <span className="font-medium break-all">
//                 info@india-iecregistration.org
//               </span>
//             </a>
//           </div>

//           <Link
//             to="/contact"
//             className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 text-base md:text-lg"
//           >
//             Visit Our Contact Page
//           </Link>
//         </div>

//         {/* Disclaimer */}
//         <div className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
//           <p>
//             EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED is a{" "}
//             <strong>private consultancy firm</strong> providing professional
//             assistance for IEC registration and import-export training. We are
//             not affiliated with the Government of India, DGFT or any government
//             portal. All services are consultancy-based.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/Pages/AboutUsPage.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaGlobe,
  FaLightbulb,
  FaBullseye,
  FaBookOpen,
  FaLaptop,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaShieldAlt,
  FaInfoCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaChalkboardTeacher,
} from "react-icons/fa";

const COMPANY = "EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED";

/* ---------- Scroll reveal (halka fade-up animation) ---------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <span className="inline-block rounded-full bg-navy-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy-700 ring-1 ring-navy-100">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight text-navy-900">
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Data ---------- */
const stats = [
  { icon: FaLaptop, value: "Online & Offline", label: "Learning Modes" },
  { icon: FaGlobe, value: "Global", label: "Market Focus" },
  { icon: FaBookOpen, value: "Practical", label: "Updated Curriculum" },
  { icon: FaHandshake, value: "Dedicated", label: "Expert Support" },
];

const learn = [
  "Documentation",
  "Compliance",
  "Logistics",
  "International marketing",
  "Global trade practices",
  "Buyer-seller networking",
  "Cross-border opportunities",
];

const offers = [
  {
    icon: FaGraduationCap,
    title: "Expert Training Programs",
    text: "Step-by-step guidance on how to start, manage, and scale import-export businesses. Covering documentation, compliance, logistics, international marketing, and more.",
    points: ["Starting an import-export business", "Managing and scaling operations", "Documentation & compliance", "Logistics & international marketing"],
  },
  {
    icon: FaGlobe,
    title: "Global Business Focus",
    text: "Practical knowledge to help you enter international markets confidently. We train you on global trade practices, buyer-seller networking, and cross-border opportunities.",
    points: ["Entering international markets", "Global trade practices", "Buyer-seller networking", "Cross-border opportunities"],
  },
];

const modes = [
  {
    icon: FaLaptop,
    title: "Online Live Sessions",
    text: "Join interactive live training from anywhere, at your convenience.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Offline Classroom Training",
    text: "Learn in person through hands-on classroom sessions with our trainers.",
  },
];

const whyChoose = [
  {
    icon: FaBookOpen,
    title: "Practical & Updated Curriculum",
    text: "Real-world knowledge aligned with current DGFT, customs, and global trade rules.",
  },
  {
    icon: FaLaptop,
    title: "Flexible Learning Modes",
    text: "Learn through online live sessions or offline classroom training as per your convenience.",
  },
  {
    icon: FaHandshake,
    title: "Dedicated Support",
    text: "Personal guidance from experienced professionals to help you implement what you learn.",
  },
];

export default function AboutUsPage() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300"></div>

        {/* decoration */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-navy-400/25 blur-3xl"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        ></div>

        <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pt-20 md:pb-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold ring-1 ring-white/20 backdrop-blur-sm">
            <FaGlobe className="text-orange-400" aria-hidden="true" />
            Import-Export Training • Online &amp; Offline
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl text-slate-200 leading-relaxed">
            Empowering businesses to go global through expert Import-Export training and guidance.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-900/30 transition-all duration-200 hover:bg-orange-700 hover:-translate-y-0.5"
            >
              Contact Us <FaArrowRight className="text-sm" aria-hidden="true" />
            </Link>
            <a
              href="#offer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
            >
              What We Offer
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= STATS ================= */}
        <Reveal className="relative z-10 -mt-12 md:-mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 text-center shadow-lg shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100">
                  <s.icon size={20} aria-hidden="true" />
                </div>
                <p className="text-lg sm:text-2xl font-extrabold text-navy-900">{s.value}</p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ================= WELCOME ================= */}
        <section className="py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 items-stretch">
            <Reveal className="lg:col-span-3">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                <span className="inline-block rounded-full bg-navy-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy-700 ring-1 ring-navy-100">
                  Who We Are
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900">
                  Welcome to {COMPANY}
                </h2>
                <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600">
                  We are a dedicated consultancy firm specializing in{" "}
                  <strong className="text-navy-900">Import and Export Training Programs</strong>.
                  Our mission is to equip startups and established businesses with the knowledge,
                  skills, and practical strategies needed to succeed in international trade and
                  global business.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                  Whether you are just starting your import-export journey or looking to expand
                  your existing business globally, we provide comprehensive training through both{" "}
                  <strong className="text-navy-900">online and offline modes</strong> — making
                  learning flexible, accessible, and result-oriented.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={120}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 md:p-8 text-white shadow-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-2xl"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <FaGraduationCap size={22} className="text-orange-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl md:text-2xl font-bold">What You Will Learn</h3>
                  <p className="mt-2 text-sm md:text-base text-slate-300">
                    Practical, hands-on training across the full import-export journey.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm md:text-base">
                    {learn.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <FaCheckCircle className="shrink-0 text-orange-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WHAT WE OFFER ================= */}
        <section id="offer" className="scroll-mt-24 pb-14 md:pb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Programs"
              title="What We Offer"
              subtitle="Expert-led training to help you start, manage and scale your import-export business."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 100} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-xl">
                  <div className="h-1.5 bg-gradient-to-r from-navy-800 to-orange-500"></div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-navy-900 group-hover:text-white">
                      <o.icon size={26} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl md:text-2xl font-bold text-navy-900">{o.title}</h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">{o.text}</p>

                    <ul className="mt-5 grid gap-2 border-t border-slate-100 pt-5 text-sm text-slate-700 sm:grid-cols-2">
                      {o.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <FaCheckCircle className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= LEARNING MODES ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Flexible Learning"
              title="Learn Your Way"
              subtitle="Online or offline — choose the mode that suits you best."
            />
          </Reveal>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 lg:gap-8">
            {modes.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-md ring-4 ring-navy-100">
                    <m.icon size={30} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-navy-900">{m.title}</h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className="pb-14 md:pb-20">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
            <Reveal className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-orange-500 to-orange-300"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                    <FaLightbulb size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900">Our Vision</h3>
                </div>
                <p className="leading-relaxed text-slate-600">
                  To become the most trusted partner for Indian businesses aspiring to succeed in
                  global trade by providing world-class import-export education and support.
                </p>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={100}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-navy-800 to-navy-500"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                    <FaBullseye size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900">Our Mission</h3>
                </div>
                <p className="leading-relaxed text-slate-600">
                  To simplify the complexities of international business through practical,
                  hands-on training and make global opportunities accessible to every motivated
                  entrepreneur and business in India.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-8 md:p-12 text-white shadow-xl">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-navy-400/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl"></div>

              <div className="relative">
                <div className="mb-8 md:mb-10 text-center">
                  <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest ring-1 ring-white/20">
                    Why Choose Us
                  </span>
                  <h2 className="mt-4 text-2xl md:text-4xl font-extrabold tracking-tight">
                    Why Choose EASRISE Legalpapers Management?
                  </h2>
                  <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>
                </div>

                <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                  {whyChoose.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                    >
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= CONTACT CTA ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="h-1.5 bg-gradient-to-r from-navy-900 via-navy-700 to-orange-500"></div>
              <div className="p-6 sm:p-8 md:p-12 text-center">
                <FaQuoteLeft className="mx-auto text-3xl text-orange-500" aria-hidden="true" />
                <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl italic leading-relaxed text-slate-600">
                  At {COMPANY}, we don’t just teach import-export — we prepare you to build a
                  successful global business with confidence.
                </p>

                <h2 className="mt-10 text-2xl md:text-4xl font-extrabold tracking-tight text-navy-900">
                  Ready to Get Started?
                </h2>
                <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500"></span>

                <div className="mt-8 grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
                  <a
                    href="tel:+919211037448"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-transform duration-300 group-hover:scale-110">
                      <FaPhoneAlt aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Call Us</span>
                    <span className="font-semibold text-navy-900">+91 9211037448</span>
                  </a>

                  <a
                    href="mailto:info@india-iecregistration.org"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-transform duration-300 group-hover:scale-110">
                      <FaEnvelope aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Us</span>
                    <span className="break-all font-semibold text-navy-900">info@india-iecregistration.org</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-8 py-3.5 text-base md:text-lg font-semibold text-white shadow-sm shadow-orange-600/30 transition-all duration-200 hover:bg-orange-700 hover:-translate-y-0.5"
                >
                  Visit Our Contact Page <FaArrowRight className="text-sm" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= DISCLAIMER ================= */}
        <section className="pb-14 md:pb-20">
          <Reveal>
            <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5 md:p-6">
              <FaInfoCircle className="mt-1 shrink-0 text-xl text-orange-600" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-slate-600">
                <strong className="text-navy-900">{COMPANY}</strong> is a{" "}
                <strong className="text-navy-900">private consultancy firm</strong> providing
                professional assistance for IEC registration and import-export training. We are
                not affiliated with the Government of India, DGFT or any government portal. All
                services are consultancy-based.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}