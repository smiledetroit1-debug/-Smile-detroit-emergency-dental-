import {
  AlertTriangle,
  FileText,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";

const careSteps = [
  {
    title: "We listen first",
    description:
      "We ask focused questions about pain, swelling, timing, triggers, dental history, and what you are most worried about.",
  },
  {
    title: "We confirm with evidence",
    description:
      "We use radiographs, images, clinical testing, and an exam to understand what is happening before treatment begins.",
  },
  {
    title: "We explain your options",
    description:
      "We review findings, prognosis, risks, treatment options, fees, and next steps so you can make an informed decision.",
  },
];

const redFlags = [
  "Facial swelling",
  "Fever with dental pain",
  "Difficulty breathing",
  "Difficulty swallowing",
  "Uncontrolled bleeding",
  "Dental trauma",
];

export function EmergencyCare() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/treatment-action.jpg"
            alt="Emergency dental treatment at Smile Detroit"
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              Emergency Care
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We treat urgent dental problems when patients need answers.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              Tooth pain, swelling, broken teeth, wisdom teeth, root canals,
              extractions, trauma, and failed dental work should not wait when
              symptoms are getting worse.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={siteContent.contact.phoneHref} variant="red">
                <Phone className="h-4 w-4" />
                Call Now
              </CTAButton>

              <Link
                to="/symptom-guide"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-gray-950 transition hover:-translate-y-1 hover:bg-gray-100"
              >
                Start Symptom Guide
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-1 h-8 w-8 flex-none text-red-400" />

              <div>
                <p className="text-2xl font-black">Urgent symptoms</p>

                <p className="mt-3 leading-7 text-gray-300">
                  If symptoms involve swelling, fever, trouble breathing,
                  trouble swallowing, uncontrolled bleeding, trauma, or rapid
                  worsening, urgent medical or dental care may be needed.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {redFlags.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            How We Approach Emergencies
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            We do not guess. We listen, confirm, and explain.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Emergency dentistry should feel calm and clear. We want patients to
            understand what is happening before deciding on treatment.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
          {careSteps.map((step, index) => (
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

      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Conditions We See
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            Emergency dental problems we commonly evaluate.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Symptoms can overlap. These categories help patients understand why
            an exam, imaging, and clinical testing matter.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.emergencyServices.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#174A8B]">
                Emergency Dentistry
              </div>

              <h3 className="text-2xl font-black text-gray-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {service.description}
              </p>

              
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl shadow-gray-300/40">
            <img
              src="/images/chairside-consult.jpg"
              alt="Dr. McFadden explaining treatment options to a patient"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              We Show You What We See
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              We explain the evidence before treatment begins.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dental pain is stressful because patients often do not know what
              is happening beneath the surface. We review images, radiographs,
              symptoms, clinical findings, prognosis, and treatment options so
              decisions are based on understanding.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-3xl bg-gray-50 p-5">
                <Stethoscope className="h-7 w-7 text-[#174A8B]" />
                <div>
                  <p className="font-black">Focused evaluation</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We ask symptom-pattern questions before jumping to a plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-3xl bg-gray-50 p-5">
                <ShieldCheck className="h-7 w-7 text-[#174A8B]" />
                <div>
                  <p className="font-black">Clinical confirmation</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We use imaging, testing, and an exam to confirm findings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-3xl bg-gray-50 p-5">
                <FileText className="h-7 w-7 text-[#174A8B]" />
                <div>
                  <p className="font-black">Clear options</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    We explain risks, fees, timing, prognosis, and next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <CTAButton href={siteContent.contact.phoneHref} variant="red">
                <Phone className="h-4 w-4" />
                Call/Text Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#174A8B] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
              We Respect Your Primary Dentist
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Emergency care without taking over your dental home.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
              Many patients come to us because their regular dentist is closed,
              unavailable, or unable to see them quickly. We can diagnose,
              explain, stabilize when possible, and help you return to your
              primary dentist informed.
            </p>
          </div>

          <CTAButton href={siteContent.contact.phoneHref} variant="red">
            <Phone className="h-4 w-4" />
            Call Now
          </CTAButton>
        </div>
      </section>
    </main>
  );
}