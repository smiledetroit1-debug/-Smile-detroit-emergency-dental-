import { SymptomGuide } from "./pages/SymptomGuide";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Phone } from "lucide-react";
import { Services } from "./pages/Services";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { MobileCallBar } from "./components/MobileCallBar";
import { NotFound } from "./pages/NotFound";

import { Home } from "./pages/Home";
import { EmergencyCare } from "./pages/EmergencyCare";
import { FeesPayment } from "./pages/FeesPayment";
import { About } from "./pages/About";

import { siteContent } from "./data/siteContent";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white pb-24 text-gray-950 lg:pb-0">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/symptom-guide" element={<SymptomGuide />} />
          <Route path="/" element={<Home />} />
          <Route path="/emergency-care" element={<EmergencyCare />} />
          <Route path="/fees-payment" element={<FeesPayment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-gray-950 px-6 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <img
                src="/images/logo.png"
                alt="Dental Emergency of Royal Oak by Smile Detroit logo"
                className="h-16 w-auto rounded bg-white p-2"
              />

              <p className="mt-6 max-w-xl text-2xl font-black">
                {siteContent.positioning}
              </p>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                {siteContent.clinicalPromise}
              </p>
            </div>

            <div>
              <p className="font-black">Website</p>

              <div className="mt-4 grid gap-3 text-sm text-gray-400">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-black">Contact</p>

              <div className="mt-4 grid gap-4 text-sm text-gray-400">
                <a
                  href={siteContent.contact.phoneHref}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {siteContent.contact.phoneDisplay}
                </a>

                <div>
  <p>
    {siteContent.contact.addressLine1}
    <br />
    {siteContent.contact.addressLine2}
  </p>

  <div className="mt-3 flex flex-wrap gap-3">
  <a
    href={siteContent.contact.googleMapsHref}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-black uppercase tracking-[0.12em] text-gray-400 hover:text-white"
  >
    Google Maps
  </a>

  <a
    href={siteContent.contact.appleMapsHref}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-black uppercase tracking-[0.12em] text-gray-400 hover:text-white"
  >
    Apple Maps
  </a>

  <a
    href={siteContent.reviews.googleReviewsHref}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-black uppercase tracking-[0.12em] text-gray-400 hover:text-white"
  >
    Google Reviews
  </a>
</div>
</div>

                <p>
                  {siteContent.contact.hoursLine1}
                  <br />
                  {siteContent.contact.hoursLine2}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
  <p>
    © {new Date().getFullYear()} {siteContent.primaryBrand}. All rights
    reserved.
  </p>

  <div className="grid gap-2 text-left md:text-right">
    <p>
      Fee-for-service emergency dental office. Dental insurance is not accepted.
    </p>

    <p>
      This website provides education only and does not replace an in-person
      dental exam.
    </p>
  </div>
</div>
        </footer>

        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}

export default App;