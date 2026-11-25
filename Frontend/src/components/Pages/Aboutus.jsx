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
} from "react-icons/fa";
import { Link } from "react-router-dom";

const iconBox =
  "flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto";

const cardClass =
  "bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200";

const offers = [
  {
    icon: FaGraduationCap,
    title: "Expert Training Programs",
    text: "Step-by-step guidance on how to start, manage, and scale import-export businesses. Covering documentation, compliance, logistics, international marketing, and more.",
  },
  {
    icon: FaGlobe,
    title: "Global Business Focus",
    text: "Practical knowledge to help you enter international markets confidently. We train you on global trade practices, buyer-seller networking, and cross-border opportunities.",
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
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            About Us
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering businesses to go global through expert Import-Export
            training and guidance.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
              Welcome to EASRISE LEGALPAPERS MANAGEMENT (OPC) PRIVATE LIMITED
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              We are a dedicated consultancy firm specializing in{" "}
              <strong>Import and Export Training Programs</strong>. Our mission
              is to equip startups and established businesses with the
              knowledge, skills, and practical strategies needed to succeed in
              international trade and global business.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Whether you are just starting your import-export journey or
              looking to expand your existing business globally, we provide
              comprehensive training through both{" "}
              <strong>online and offline modes</strong> — making learning
              flexible, accessible, and result-oriented.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-900 mb-8 md:mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {offers.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${cardClass} text-center`}>
                <div className={iconBox}>
                  <Icon size={26} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12 md:mb-16">
          <div className={cardClass}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-orange-50 text-orange-600 rounded-xl ring-1 ring-orange-100">
                <FaLightbulb size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                Our Vision
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted partner for Indian businesses aspiring
              to succeed in global trade by providing world-class import-export
              education and support.
            </p>
          </div>

          <div className={cardClass}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-orange-50 text-orange-600 rounded-xl ring-1 ring-orange-100">
                <FaBullseye size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                Our Mission
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To simplify the complexities of international business through
              practical, hands-on training and make global opportunities
              accessible to every motivated entrepreneur and business in India.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Why Choose EASRISE Legalpapers Management?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-600 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Teaser */}
        <div className="text-center mb-10">
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
            At EASRISE Legalpapers Management (OPC) Private Limited, we don’t
            just teach import-export — we prepare you to build a successful
            global business with confidence.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
            Ready to Get Started?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center max-w-xl mx-auto mb-8">
            <a
              href="tel:+919211037448"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
            >
              <FaPhoneAlt className="text-orange-600" />
              <span className="font-medium">+91 9211037448</span>
            </a>
            <a
              href="mailto:info@india-iecregistration.org"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors"
            >
              <FaEnvelope className="text-orange-600" />
              <span className="font-medium break-all">
                info@india-iecregistration.org
              </span>
            </a>
          </div>

          <Link
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 text-base md:text-lg"
          >
            Visit Our Contact Page
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
          <p>
            EASRISE Legalpapers Management (OPC) Private Limited is a{" "}
            <strong>private consultancy firm</strong> providing professional
            assistance for IEC registration and import-export training. We are
            not affiliated with the Government of India, DGFT or any government
            portal. All services are consultancy-based.
          </p>
        </div>
      </div>
    </div>
  );
}