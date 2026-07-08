import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  CreditCard,
  Crown,
  Diamond,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const googleReviewsHref =
  `https://www.google.com/search?q=${encodeURIComponent(
    "Dental Emergency of Royal Oak by Smile Detroit Google reviews"
  )}`;

const whyChooseUs = [
  {
    icon: Crown,
    title: "Concierge Emergency Dental Care",
    text: "A private, priority dental experience designed for patients who need answers, clarity, and treatment without waiting weeks for care.",
  },
  {
    icon: Zap,
    title: "Same-Day Treatment Focus",
    text: "When clinically appropriate, the goal is to diagnose the problem and provide definitive treatment during the same visit.",
  },
  {
    icon: ShieldCheck,
    title: "No Third-Party Insurance Delays",
    text: "Care is discussed directly with the patient. Pricing is reviewed before treatment so decisions are clear, private, and streamlined.",
  },
  {
    icon: Diamond,
    title: "Luxury-Level Diagnosis Experience",
    text: "Imaging, clinical findings, and treatment options are explained visually so patients understand what is happening before care begins.",
  },
];

const serviceCities = [
  "Royal Oak",
  "Detroit",
  "Southfield",
  "Troy",
  "Birmingham",
  "Ferndale",
  "Warren",
  "Ann Arbor",
  "Lansing",
  "Grand Rapids",
  "Flint",
  "Dearborn",
];

const featuredTestimonials = [
  {
    name: "Abe A.",
    city: "Metro Detroit, MI",
    quote:
      "Professional, calm, and thorough. The office made the emergency process feel organized instead of overwhelming.",
  },
  {
    name: "Cordon Murphy",
    city: "Royal Oak, MI",
    quote:
      "The care felt personal from the first call. Everything was explained clearly before treatment started.",
  },
  {
    name: "OleAnt313",
    city: "Detroit, MI",
    quote:
      "A real emergency dental office that understands pain, timing, and what patients need when they cannot wait.",
  },
];

const paymentFaqs = [
  {
  question: "Do you accept dental insurance?",
  answer: (
    <>
      Dental Emergency of Royal Oak by Smile Detroit is a private fee-for-service dental office.{" "}
      <strong className="font-black text-gray-950">
        We do not accept dental insurance
      </strong>{" "}
      directly, which allows care to stay focused on the patient, timing,
      diagnosis, and treatment options without third-party delays.
    </>
  ),
},
  {
  question: "Can I pay with cash or card?",
  answer: (
    <>
      <strong className="font-black text-gray-950">Yes.</strong> Patients may pay
      with cash, credit card, or debit card. Payment options are reviewed before
      treatment begins.
    </>
  ),
},
  {
    question: "Is financing available?",
    answer: (
      <>
        <strong className="font-black text-gray-950">Yes.</strong> Financing options may be available for qualified patients. Approval depends on the financing provider and the patient's application.
      </>
    ),
  },
  {
  question: "Will I know the cost before treatment?",
  answer: (
    <>
      <strong className="font-black text-gray-950">Yes.</strong> After the
      emergency exam and diagnostic review, treatment options and estimated fees
      are explained before treatment begins.
    </>
  ),
},
  {
    question: "Can I submit my receipt to insurance myself?",
    answer:
      "Patients may request an itemized receipt to submit to their insurance provider for possible out-of-network reimbursement. Reimbursement is not guaranteed and depends on the patient's plan.",
  },
];

export function PremiumTrustBar() {
  return (
    <section className="border-y border-blue-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-3 lg:px-8">
        <a
          href={googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-900/10"
        >
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <span className="text-sm font-black uppercase tracking-[0.16em] text-[#174A8B]">
              Google Reviews
            </span>
          </div>

          <p className="mt-3 text-2xl font-black text-gray-950">
            Highly Rated Emergency Care
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            See what patients say about the private emergency dental experience.
          </p>
        </a>

        <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-red-600">
            Priority Access
          </p>
          <p className="mt-3 text-2xl font-black text-gray-950">
            Call/Text First
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Emergency patients are guided by phone or text before arrival.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-red-600">
            Private Pay Model
          </p>
          <p className="mt-3 text-2xl font-black text-gray-950">
            Clear Pricing
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Transparent fees before treatment. Cash, card, and financing options.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="bg-gray-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-400">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            A private emergency dental experience built around urgency, clarity,
            and comfort.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dental Emergency of Royal Oak by Smile Detroit is designed for
            patients who want concierge-level attention, advanced diagnosis, and
            same-day treatment options without the friction of traditional
            insurance-driven dentistry.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MichiganServiceSection() {
  const googleMapEmbedSrc =
    "https://www.google.com/maps?q=809%20W%2011%20Mile%20Road%2C%20Royal%20Oak%2C%20MI%2048067&output=embed";

  const googleDirectionsHref =
    "https://www.google.com/maps/dir/?api=1&destination=809%20W%2011%20Mile%20Road%2C%20Royal%20Oak%2C%20MI%2048067";

  return (
    <section className="bg-blue-50 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#174A8B]">
            Statewide Emergency Care
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
            Patients travel from across Michigan for priority dental emergency
            care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Located in Royal Oak, the practice serves patients from Metro Detroit
            and across Michigan who need private, high-acuity emergency dental
            treatment, clear answers, and same-day options.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceCities.map((city) => (
              <span
                key={city}
                className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-[#174A8B] shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-900/10">
          <div className="absolute left-8 top-8 z-10 rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl">
            Royal Oak Location
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-gray-100">
            <iframe
              title="Google Map for Dental Emergency of Royal Oak by Smile Detroit"
              src={googleMapEmbedSrc}
              width="100%"
              height="520"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>

          <div className="mt-5 rounded-[1.5rem] bg-gray-950 p-5 text-white">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-red-400" />

              <div>
                <p className="font-black">
                  809 W 11 Mile Road, Royal Oak, MI
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-300">
                  A central Metro Detroit location for urgent dental visits,
                  second opinions, and same-day emergency treatment options.
                </p>

                <a
                  href={googleDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedTestimonialsSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
              Featured Patient Reviews
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
              Built on trust, urgency, and private patient care.
            </h2>
          </div>

          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gray-950 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-600"
          >
            Read Google Reviews
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featuredTestimonials.map((review) => (
            <article
              key={review.name}
              className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-950/5"
            >
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-lg font-bold leading-8 text-gray-800">
                "{review.quote}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <p className="font-black text-gray-950">{review.name}</p>
                <p className="mt-1 text-sm font-bold text-[#174A8B]">
                  {review.city}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PaymentExperienceSection() {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
            Private Pay Experience
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
            Cash-pay dentistry positioned around speed, privacy, and clear
            decisions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The practice is designed for patients who want a premium, streamlined
            emergency dental experience without third-party insurance delays.
            Treatment options and pricing are reviewed before care begins.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Cash, card, and financing options available",
              "Transparent treatment estimates before care",
              "Same-day treatment options when clinically appropriate",
              "Itemized receipts available for possible out-of-network submission",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <p className="font-bold leading-7 text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="self-start rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-gray-950/10">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] bg-blue-50 p-6">
              <Banknote className="h-8 w-8 text-[#174A8B]" />
              <h3 className="mt-5 text-2xl font-black text-gray-950">
                Cash Pay
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A direct, private payment experience with clear costs before
                treatment.
              </p>
            </div>

            <div className="rounded-[2rem] bg-red-50 p-6">
              <CreditCard className="h-8 w-8 text-red-600" />
              <h3 className="mt-5 text-2xl font-black text-gray-950">
                Financing
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Financing options may be available for qualified patients.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[2rem] bg-gray-950 p-6 text-white">
            <Sparkles className="h-8 w-8 text-red-400" />
            <h3 className="mt-5 text-2xl font-black">
              Luxury Dental Experience
            </h3>
            <p className="mt-3 leading-7 text-gray-300">
              Private diagnosis review, visual education, priority scheduling,
              and treatment planning without insurance-driven friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinancingFaqSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-[#174A8B]">
          Financing & Payment FAQ
        </p>

        <h2 className="mt-5 text-center text-4xl font-black tracking-tight text-gray-950 md:text-6xl">
          What patients can expect before treatment begins.
        </h2>

        <div className="mt-14 grid gap-4">
          {paymentFaqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.75rem] border border-gray-100 bg-gray-50 p-6"
            >
              <h3 className="text-xl font-black text-gray-950">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}