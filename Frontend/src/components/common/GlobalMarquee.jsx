import { FaInfoCircle } from "react-icons/fa";

function MarqueeText() {
  return (
    <span className="mx-12">
      This is a private consultancy self-registration portal owned by{" "}
      <a
        href="https://legalpapersindia.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline underline-offset-2 hover:text-orange-600"
      >
        EASRISE LEGALPAPERS MANAGEMENT PRIVATE LIMITED
      </a>{" "}
      for obtaining Import Export Code. Portal fees are consultancy in nature.
    </span>
  );
}

export default function GlobalMarquee() {
  return (
    <div className="bg-navy-50 border-b border-navy-100 text-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <FaInfoCircle className="shrink-0 text-orange-600" size={14} />
        <div className="marquee-container relative flex-1 overflow-hidden">
          <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide">
            <MarqueeText />
            <MarqueeText />
          </div>
        </div>
      </div>
    </div>
  );
}