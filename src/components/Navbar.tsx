import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { siteContent } from "../data/siteContent";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-extrabold tracking-[-0.02em] transition ${
      isActive
        ? "bg-blue-50 text-[#174A8B]"
        : "text-gray-600 hover:bg-gray-50 hover:text-[#174A8B]"
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-2xl px-4 py-3 text-base font-black transition ${
      isActive
        ? "bg-blue-50 text-[#174A8B]"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1700px] items-center justify-between gap-5 px-6 py-4">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src="/images/logo.png"
            alt="Dental Emergency of Royal Oak by Smile Detroit logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {siteContent.nav.map((item) => (
            <NavLink key={item.label} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <a
          href={siteContent.contact.phoneHref}
          className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-red-600 px-4 py-3 text-[13px] font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Call {siteContent.contact.phoneDisplay}
        </a>

        <button
          className="rounded-full border border-gray-200 p-3 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
          <div className="grid gap-2">
            {siteContent.nav.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={mobileNavClass}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href={siteContent.contact.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-red-600 px-5 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20"
            >
              <Phone className="h-4 w-4" />
              Call/Text Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}