import {
  CheckCircle2,
  Eye,
  HeartPulse,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";

const serviceGroups = [
  {
    title: "Emergency Dental Service",
    description:
      "Urgent dental evaluation for patients dealing with pain, swelling, broken teeth, infection concerns, dental trauma, or failed dental work.",
    services: [
      "Emergency dental service",
      "Infection and pain management",
      "Abscess and swelling management",
      "X rays",
    ],
  },
  {
    title: "Extractions & Surgical Care",
    description:
      "Surgical-focused care when a tooth cannot be predictably saved, when infection is present, or when removal is the best option.",
    services: ["Extractions", "Bone graft", "Implants"],
  },
  {
    title: "Root Canals",
    description:
      "Tooth-saving treatment planning for painful, infected, inflamed, or damaged teeth when the tooth can still be restored.",
    services: ["Root canals"],
  },
  {
    title: "Restorative Dentistry",
    description:
      "Repair and reconstruction options for broken, decayed, worn, or structurally compromised teeth.",
    services: ["Crowns", "Inlay", "Onlay"],
  },
  {
    title: "Dentures & Replacement Options",
    description:
      "Options for missing teeth, unstable teeth, failing teeth, or patients who need replacement planning after extractions.",
    services: ["Dentures", "Implants"],
  },
  {
    title: "Bite, Sleep & Protection",
    description:
      "Supportive care for patients with grinding, clenching, bite stress, sleep-related concerns, and long-term tooth protection needs.",
    services: ["Bite guards", "Sleep apnea"],
  },
];

const processSteps = [
  {
    title: "We listen first",
    description:
      "We start with the patient’s symptoms: where the pain is, how long it has been happening, what triggers it, whether it lingers, and what the patient is most worried about.",
  },
  {
    title: "We confirm with evidence",
    description:
      "We use X rays, clinical testing, images, and examination findings to understand what is actually happening before recommending treatment.",
  },
  {
    title: "We show you what we see",
    description:
      "We explain the findings visually so patients understand the diagnosis, prognosis, risks, fees, and options before making a decision.",
  },
  {
    title: "We treat with purpose",
    description:
      "When treatment is appropriate, we focus on relief, stability, function, and the next step — not just rushing through the emergency.",
  },
];

export function Services() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[720px] overflow-hidden bg-gray-950 px-6 py-28 text-white">
  <video
    className="absolute inset-0 h-full w-full object-cover object-center"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/images/treatment-action.jpg"
  >
    <source src="/videos/services-hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/35" />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/25" />

  <div className="relative mx-auto flex min-h-[560px] max-w-5xl items-center justify-center text-center md:-translate-y-10">
    <div>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
        Services
      </p>

      <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
        Concierge emergency dentistry with comprehensive options.
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
        We help patients move from pain and uncertainty to clear answers. Our
        services are built around emergency diagnosis, same-day treatment
        planning, visual education, and long-term dental stability.
      </p>

      <div className="mt-9">
        <CTAButton
          href={siteContent.contact.phoneHref}
          variant="red"
          showArrow={false}
        >
          <Phone className="h-4 w-4" />
          Call/Text Now
        </CTAButton>
      </div>
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            What We Provide
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-6xl">
            Services listed around how patients actually need care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dental emergencies rarely fit into one simple category. Pain,
            infection, broken teeth, missing teeth, bite problems, and long-term
            treatment needs often overlap.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[2rem] border border-gray-100 bg-gray-50 p-7 transition hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#174A8B]">
                Smile Detroit
              </div>

              <h3 className="text-2xl font-black text-gray-950">
                {group.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {group.description}
              </p>

              <div className="mt-6 grid gap-3">
                {group.services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#174A8B]" />
                    <span className="text-sm font-bold leading-6 text-gray-700">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              Practice Philosophy
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We do not want patients guessing in pain.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our philosophy is built around careful confidence. We move with
              urgency when a patient is in pain, but we also slow down enough to
              explain the findings, risks, options, and next steps clearly.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6">
              <p className="font-black text-white">
                We listen for the pattern. We confirm with evidence. We show you
                what we see.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] bg-white p-6 text-gray-950">
              <Eye className="h-8 w-8 text-[#174A8B]" />
              <h3 className="mt-5 text-2xl font-black">Visual diagnosis</h3>
              <p className="mt-3 leading-8 text-gray-600">
                We use images, X rays, and clinical findings to help patients
                understand what is happening instead of asking them to guess.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-gray-950">
              <ShieldCheck className="h-8 w-8 text-[#174A8B]" />
              <h3 className="mt-5 text-2xl font-black">
                Clear options before treatment
              </h3>
              <p className="mt-3 leading-8 text-gray-600">
                Patients should understand the diagnosis, prognosis, risks,
                fees, and options before moving forward.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-gray-950">
              <HeartPulse className="h-8 w-8 text-red-600" />
              <h3 className="mt-5 text-2xl font-black">
                Built for working people
              </h3>
              <p className="mt-3 leading-8 text-gray-600">
                We understand that emergencies do not wait for normal office
                hours. The practice is built around access, urgency, and clear
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-6xl">
            How we approach care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The goal is to make the visit feel structured and understandable,
            even when the patient arrives in pain, anxious, or unsure what is
            wrong.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-[#174A8B]">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-950">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#174A8B] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
              Have an urgent concern?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Call or text before walking in.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
              We can help you understand the next step and prepare for your
              emergency visit.
            </p>
          </div>

          <CTAButton
            href={siteContent.contact.phoneHref}
            variant="red"
            showArrow={false}
          >
            <Phone className="h-4 w-4" />
            Call/Text Now
          </CTAButton>
        </div>
      </section>
    </main>
  );
}