import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Logo from "../../Assest/logo.png";
import azadi from "../../Assest/india.png";

const quickLinks = [
  { name: "Apply for IEC", hash: "registration-form" },
  { name: "IEC Modification", hash: "registration-form" },
  { name: "IEC Renewal / Update", hash: "registration-form" },
  { name: "Procedure", hash: "procedure" },
  { name: "Benefits", hash: "benefits" },
  { name: "FAQs", hash: "faq" },
];

const policyLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Refund Policy", path: "/refund-policy" },
  { name: "Terms & Conditions", path: "/term-condition" },
  { name: "About Us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Disclaimer", path: "/disclaimer" },
];

const headingClass =
  "relative pb-3 text-sm font-bold uppercase tracking-wider text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500";

const OWNER = "EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED";

export default function MainFooter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (hash) => {
    const element = document.getElementById(hash);

    // Home par ho to seedha scroll, warna home par jao (ScrollToHash scroll karega)
    if (pathname === "/" && element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <footer className="bg-[#35286f] text-slate-400 border-t-4 border-orange-600 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Important Notice */}
          <div className="space-y-5">
            <h3 className={headingClass}>Important Notice</h3>

            <p className="text-sm leading-relaxed">
              This is a{" "}
              <span className="font-semibold text-white">PRIVATE CONSULTANCY</span>{" "}
              portal owned by{" "}
              <a
                href="https://legalpapersindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline underline-offset-2 hover:text-orange-400"
              >
                {OWNER}
              </a>
              , not affiliated with DGFT or any Government body. We provide
              professional assistance for{" "}
              <b className="text-white">IEC registration</b>, form filling,
              document preparation and related services only.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className={headingClass}>Quick Links</h3>

            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => goToSection(item.hash)}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2.5 hover:translate-x-1 text-left w-full bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Contact */}
          <div className="space-y-5">
            <h3 className={headingClass}>Policies &amp; Contact</h3>

            <ul className="space-y-2.5 text-sm">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2.5 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href="mailto:info@india-iecregistration.org"
                className="flex items-center gap-3 break-all hover:text-white transition-colors"
              >
                <FaEnvelope className="shrink-0 text-orange-500 text-base" />
                info@india-iecregistration.org
              </a>

              <a
                href="tel:+919211037448"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <FaPhoneAlt className="shrink-0 text-orange-500 text-base" />
                +91-9211037448
              </a>
            </div>
          </div>

          {/* Trusted Logos */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
            <h3 className={`md:self-start ${headingClass}`}>Trusted By</h3>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Azadi logo mein text white hai, isliye dark card */}
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <img
                  src={azadi}
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>

              <div className="rounded-xl bg-white p-3 shadow-sm">
                <img
                  src={Logo}
                  alt="IEC Registration Portal"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-slate-400">
          <p>
            This is not a Government run website. The form is not the actual
            DGFT application form. It is only to collect information from our
            clients so that our experts can easily understand their business
            needs. By proceeding with this website, you acknowledge that we are
            a private consultancy providing assistance and the fee collected is
            a consultancy fee.
          </p>
        </div>

        {/* Copyright Line */}
        <div className="mt-5 pt-5 border-t border-white/10 text-center space-y-1">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium">{OWNER}</span>. All
            Rights Reserved. | Website Design, Developed &amp; Google Promotion
            by{" "}
            <a
              href="https://legalpapersindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-medium underline underline-offset-2 hover:text-orange-400"
            >
              {OWNER}
            </a>
          </p>
          <p className="text-xs text-slate-500">
            CIN Number - U70200DL2023OPC416302
          </p>
        </div>
      </div>
    </footer>
  );
}