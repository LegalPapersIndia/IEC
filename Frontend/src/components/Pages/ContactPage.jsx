import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const iconBox =
  "flex items-center justify-center w-14 h-14 bg-navy-50 text-navy-700 rounded-xl ring-1 ring-navy-100 mb-5 mx-auto";

const cardClass =
  "bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200";

export default function ContactPage() {
  return (
    <div className="py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            Contact Us
          </h1>
          <span className="mx-auto mb-5 block h-1 w-16 rounded-full bg-orange-500"></span>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            We’re here to help you with your IEC Registration, Modification, or
            Renewal. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Phone Card */}
          <div className={cardClass}>
            <div className={iconBox}>
              <FaPhoneAlt size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-navy-900 text-center mb-2">
              Phone
            </h3>
            <a
              href="tel:+919211037448"
              className="block text-center text-slate-800 hover:text-orange-600 transition-colors text-base md:text-lg font-semibold"
            >
              +91 9211037448
            </a>
            <p className="text-center text-sm text-slate-500 mt-2">
              Available 10 AM – 6 PM (Monday to Saturday)
            </p>
          </div>

          {/* Email Card */}
          <div className={cardClass}>
            <div className={iconBox}>
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-navy-900 text-center mb-2">
              Email
            </h3>
            <a
              href="mailto:info@india-iecregistration.org"
              className="block text-center text-slate-800 hover:text-orange-600 transition-colors text-base md:text-lg font-semibold break-all"
            >
              info@india-iecregistration.org
            </a>
            <p className="text-center text-sm text-slate-500 mt-2">
              We usually reply within 24 hours
            </p>
          </div>

          {/* Support Hours Card */}
          <div className={`${cardClass} md:col-span-2 lg:col-span-1`}>
            <div className={iconBox}>
              <FaClock size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-navy-900 text-center mb-2">
              Support Hours
            </h3>
            <p className="text-center text-slate-700 text-base md:text-lg">
              Monday – Saturday: 10:00 AM – 6:00 PM
            </p>
            <p className="text-center text-slate-700 text-base md:text-lg mt-3">
              Sunday: Closed
            </p>
            <p className="text-center text-sm text-slate-500 mt-6">
              For urgent queries, feel free to call or email us.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-14 text-center">
          <p className="text-slate-600 text-base md:text-lg mb-4 max-w-2xl mx-auto">
            Prefer to reach us instantly? Use the phone number or email above —
            our team is ready to assist you with IEC Registration,
            Modification, Renewal, or any related queries.
          </p>

          <p className="text-sm text-slate-500">
            We are a private consultancy helping businesses across India with
            hassle-free IEC services.
          </p>
        </div>
      </div>
    </div>
  );
}