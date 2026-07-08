import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { siteContent } from "../data/siteContent";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-[70] hidden flex-col gap-3 lg:flex">
      <a
        href={siteContent.contact.phoneHref}
        className="group flex items-center justify-end gap-3 rounded-full bg-red-600 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-red-600/25 transition hover:-translate-y-1 hover:bg-red-700"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>

      <a
        href="sms:+12484308307"
        className="group flex items-center justify-end gap-3 rounded-full bg-[#174A8B] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-900"
      >
        <MessageCircle className="h-5 w-5" />
        Text Us
      </a>

      <a
        href={siteContent.contact.phoneHref}
        className="group flex items-center justify-end gap-3 rounded-full bg-gray-950 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-gray-950/20 transition hover:-translate-y-1 hover:bg-black"
      >
        <CalendarCheck className="h-5 w-5" />
        Book Now
      </a>
    </div>
  );
}