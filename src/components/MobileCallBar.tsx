import { Phone } from "lucide-react";
import { siteContent } from "../data/siteContent";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-gray-950/95 px-4 py-3 shadow-2xl backdrop-blur-xl lg:hidden">
      <a
        href={siteContent.contact.phoneHref}
        className="flex items-center justify-center gap-3 rounded-full bg-red-600 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-red-600/20"
      >
        <Phone className="h-5 w-5" />
        Call/Text {siteContent.contact.phoneDisplay}
      </a>
    </div>
  );
}