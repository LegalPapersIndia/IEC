import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import TopBar from "./components/Header/HeaderTop";
import Navbar from "./components/Header/Navbar";
import RegistrationForm from "./components/Form/RegistrationForm";
import InstructionsSidebar from "./components/Form/InstructionsSidebar";
import HeroCarousel from "./components/Sections/HeroCarousel";
import ProcedureSection from "./components/Sections/ProcedureSection";
import BenefitsSection from "./components/Sections/BenefitsSection";
import FaqSection from "./components/Sections/FaqSection";
import MainFooter from "./components/Footer/MainFooter";
import PaymentSummary from "./components/Payment/PaymentSummary";

import AboutUsPage from "./components/Pages/Aboutus";
import ContactPage from "./components/Pages/ContactPage";
import DisclaimerPage from "./components/Pages/DisclaimerPage";
import PrivacyPolicyPage from "./components/Pages/PrivacyPolicyPage";
import RefundPolicyPage from "./components/Pages/RefundPolicyPage";
import TermsAndConditionsPage from "./components/Pages/TermsAndConditionsPage";

import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

import GlobalMarquee from "./components/common/GlobalMarquee";
import ScrollToHash from "./components/common/ScrollToHash";
import ScrollToTop from "./components/common/ScrollToTop";

const navItems = [
  { label: "IEC REGISTRATION", to: "#registration-form" },
  { label: "IEC MODIFICATION", to: "#registration-form" },
  { label: "IEC RENEWAL/UPDATE", to: "#registration-form" },
  { label: "ABOUT US", to: "/about-us" },
  { label: "PROCEDURE", to: "#procedure" },
  { label: "BENEFITS", to: "#benefits" },
  { label: "FAQ'S", to: "#faq" },
];

// Same-page section par smooth scroll (header offset ke saath)
const handleScroll = (e, target) => {
  if (!target.startsWith("#")) return;

  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    const headerOffset = 140;
    const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

// Admin dashboard sirf logged-in admin ke liye
function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  return children;
}

// Floating back-to-top button
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
      aria-label="Back to top"
    >
      <FaArrowUp size={16} />
    </button>
  );
}

function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-10 md:pt-10 md:pb-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <RegistrationForm />
          </div>
          <div className="lg:col-span-1">
            <InstructionsSidebar />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl mt-14 md:mt-20 space-y-16 md:space-y-24">
        <ProcedureSection />
        <BenefitsSection />
        <FaqSection />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 text-center tracking-tight">
        404 — Page Not Found
      </h1>
    </div>
  );
}

function AppContent() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Always visible header */}
      <TopBar />

      {/* Navbar + marquee + hero: sirf home par */}
      {isHome && <Navbar navItems={navItems} handleScroll={handleScroll} />}
      {isHome && <GlobalMarquee />}
      {isHome && <HeroCarousel />}

      {/* Har route change par top par jao, aur #hash ho to us section par */}
      <ScrollToTop />
      <ScrollToHash />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment-summary" element={<PaymentSummary />} />

          {/* Info & legal pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/term-condition" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <MainFooter />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;