import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";
import { InsuranceNotice } from "../components/InsuranceNotice";
import {
  FeaturedTestimonialsSection,
  FinancingFaqSection,
  MichiganServiceSection,
  PaymentExperienceSection,
  PremiumTrustBar,
  WhyChooseUsSection,
} from "../components/HomepagePremiumSections";

const diagnosticGallery = [
  {
    src: "/images/patient-education/occlusal-cavity-view.jpeg",
    title: "Tooth Decay",
    text: "Close-up view of cracks, cavities, staining, and tooth structure.",
  },
  {
    src: "/images/patient-education/radiograph-full-view.jpeg",
    title: "Full Radiograph Review",
    text: "X-ray review for diagnosis, prognosis, risks, and next steps.",
  },
  {
    src: "/images/patient-education/radiograph-measurements.jpeg",
    title: "Radiograph Measurements",
    text: "Bone levels, spacing, defects, and areas that need attention.",
  },
  {
    src: "/images/patient-education/radiograph-marked.jpeg",
    title: "Marked Findings",
    text: "Highlighted findings so patients understand what we see.",
  },
  {
    src: "/images/patient-education/intraoral-side-view.jpeg",
    title: "Intraoral Photo Review",
    text: "Gums, bite, and tooth surfaces shown clearly.",
  },
];

function DiagnosticImageScroller() {
  return (
    <div className="mx-auto mt-8 max-w-6xl overflow-x-auto pb-4">
      <div className="flex snap-x snap-mandatory gap-4 px-1">
        {diagnosticGallery.map((image) => (
          <article
            key={image.title}
            className="w-[230px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md shadow-gray-950/5 sm:w-[250px] md:w-[270px]"
          >
            <div className="aspect-[3/2] w-full bg-gray-950">
              <img
                src={image.src}
                alt={image.title}
                width={900}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-sm font-black leading-tight text-gray-950 md:text-base">
                {image.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-600">
                {image.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]">
        <div className="mx-auto grid min-h-[calc(100vh-104px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#174A8B] shadow-sm">
              {siteContent.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl">
              {siteContent.hero.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-black leading-8 text-red-600 md:text-2xl">
              Tooth pain. Swelling. Broken teeth. Wisdom teeth. Root canals.
              Extractions. Teeth whitening.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              Dental emergencies do not wait for business hours. We help
              patients get answers, relief, and treatment options outside
              traditional dental hours.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              We use focused symptom questions, radiographs, images, clinical
              testing, and visual education to help you understand what is
              happening before you decide.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={siteContent.contact.phoneHref} variant="red">
                <Phone className="h-4 w-4" />
                Call Now
              </CTAButton>

              <Link
                to="/symptom-guide"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#174A8B] px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-[#0E376A]"
              >
                Start Symptom Guide
              </Link>

              <Link
                to="/emergency-care"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-black text-gray-950 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:bg-gray-50"
              >
                View Emergency Care
              </Link>
            </div>
          </div>

          <div className="rounded-[3rem] bg-white p-4 shadow-2xl shadow-blue-900/10">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-950">
              <img
  src="/images/doctor-portrait.jpg"
  alt="Dr. Anthonio McFadden smiling in Smile Detroit clinical attire"
  className="image-pop-reveal h-[620px] w-full object-cover object-top"
/>
              <div className="absolute inset-x-5 bottom-5 rounded-[2rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-red-600">
                  {siteContent.signaturePromise}
                </p>
                <p className="mt-2 text-lg font-black text-gray-950">
                  {siteContent.clinicalPromise}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PremiumTrustBar />

      <section className="border-y border-gray-100 bg-white px-6 py-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10">
            <Clock className="mx-auto h-6 w-6 text-[#174A8B]" />

            <p className="mt-3 text-xl font-black">Working Hours</p>

            <div className="mt-3 text-sm font-bold leading-7 text-gray-600">
              <p>
                Open{" "}
                <span className="text-lg font-black text-[#174A8B]">24</span>{" "}
                Hours
              </p>

              <p>
                <span className="text-lg font-black text-red-600">7</span>{" "}
                Days a Week
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10">
            <MapPin className="mx-auto h-6 w-6 text-[#174A8B]" />

            <p className="mt-3 text-xl font-black">Location</p>

            <p className="mt-2 text-sm font-bold text-gray-600">
              {siteContent.contact.addressLine1}
              <br />
              {siteContent.contact.addressLine2}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={siteContent.contact.googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex whitespace-nowrap rounded-full bg-[#174A8B] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0E376A]"
              >
                Google Maps
              </a>

              <a
                href={siteContent.contact.appleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex whitespace-nowrap rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-gray-950 ring-1 ring-gray-200 transition hover:bg-gray-50"
              >
                Apple Maps
              </a>
            </div>
          </div>

          <a
            href={siteContent.contact.phoneHref}
            className="group rounded-3xl bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10"
          >
            <Phone className="mx-auto h-6 w-6 text-red-600 transition group-hover:scale-110" />

            <p className="mt-3 text-xl font-black">Phone Number</p>

            <p className="mt-2 text-sm font-black text-gray-700">
              {siteContent.contact.phoneDisplay}
            </p>

            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-red-600">
              Tap to Call
            </p>
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Learn Before You Decide
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            We explain what we see before treatment begins.
          </h2>
          <DiagnosticImageScroller />
            <div className="mt-12 overflow-x-auto pb-4">
  
</div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe patients should understand the images, symptoms,
            diagnosis, prognosis, risks, fees, and options before making a
            treatment decision.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
          {siteContent.learnSections.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <CheckCircle2 className="h-8 w-8 text-[#174A8B]" />

              <h3 className="mt-6 text-2xl font-black text-gray-950">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[720px] overflow-hidden bg-gray-950 px-6 py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/treatment-action.jpg"
            alt="Dr. McFadden treating a patient during emergency dental care"
            className="h-full w-full object-contain object-right opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/20" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              Emergency Care
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We are built for urgent dental problems after hours.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              We treat tooth pain, swelling, broken teeth, wisdom teeth, root
              canals, extractions, dental trauma, and failed dental work.
            </p>

            <Link
              to="/emergency-care"
              className="mt-10 inline-flex whitespace-nowrap rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700"
            >
              View Emergency Care
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Smile Transformation
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              We help patients think beyond pain relief.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A dental emergency may be the first step toward understanding
              long-term function, appearance, confidence, and a bigger smile
              plan.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-gray-950 p-3 shadow-2xl shadow-gray-300/50">
            <img
              src="/images/before-after-smile.png"
              alt="Dental before and after smile transformation"
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>
            <InsuranceNotice />
            
      <WhyChooseUsSection />
      <MichiganServiceSection />
      <FeaturedTestimonialsSection />
      <PaymentExperienceSection />
      <FinancingFaqSection />
    </main>
  );
}