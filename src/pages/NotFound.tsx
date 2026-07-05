import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";

export function NotFound() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
          Page Not Found
        </p>

        <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl">
          This page does not exist.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          The page you are looking for may have moved. If you need emergency
          dental care, call or text us now.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <CTAButton
            href={siteContent.contact.phoneHref}
            variant="red"
            showArrow={false}
          >
            <Phone className="h-4 w-4" />
            Call/Text Now
          </CTAButton>

          <Link
            to="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#174A8B] px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-[#0E376A]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}