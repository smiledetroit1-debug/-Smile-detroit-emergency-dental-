import { useState } from "react";
import {
  AlertTriangle,
  Clock,
  HelpCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";

const concerns = [
  {
    title: "Tooth pain",
    description:
      "Pain may come from decay, nerve inflammation, biting pressure, infection, cracked teeth, or failed dental work.",
  },
  {
    title: "Swelling",
    description:
      "Swelling can be a sign of infection and should be evaluated quickly, especially if it is spreading or worsening.",
  },
  {
    title: "Broken tooth",
    description:
      "A broken tooth may need a filling, crown, root canal, extraction, or another option depending on how deep the break goes.",
  },
  {
    title: "Wisdom tooth pain",
    description:
      "Wisdom teeth can cause pain, swelling, gum inflammation, pressure, or infection when they do not have enough space.",
  },
  {
    title: "Root canal concern",
    description:
      "Lingering pain, spontaneous pain, or temperature sensitivity may suggest nerve involvement, but testing is needed.",
  },
  {
    title: "Extraction concern",
    description:
      "Some teeth cannot be saved predictably. We explain risks, replacement options, and aftercare before treatment.",
  },
];

const questions = [
  "What is the main problem?",
  "How long has this been happening?",
  "Is the pain sharp, dull, throbbing, or pressure-like?",
  "Does cold, heat, biting, or chewing trigger the pain?",
  "Does the pain linger after the trigger is gone?",
  "Is there swelling, drainage, fever, or facial pressure?",
  "Is the tooth broken, loose, or previously treated?",
  "Do you currently have a primary dentist?",
];

export function SymptomGuide() {
  const [selectedConcern, setSelectedConcern] = useState(concerns[0]);

  return (
    <main className="bg-white">
      <section className="bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Start Symptom Guide
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl">
              We listen for the pattern before we recommend treatment.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              This guide helps you understand what we commonly ask during an
              emergency dental call. It does not diagnose online. A diagnosis
              requires an exam, radiographs, clinical testing, and professional
              judgment.
            </p>

            <div className="mt-8 rounded-[2rem] border border-red-200 bg-red-50 p-6">
              <div className="flex gap-4">
                <AlertTriangle className="h-7 w-7 flex-none text-red-600" />
                <div>
                  <p className="font-black text-red-700">Urgent warning</p>
                  <p className="mt-2 leading-7 text-gray-700">
                    Facial swelling, fever, difficulty breathing, difficulty
                    swallowing, uncontrolled bleeding, dental trauma, or rapidly
                    worsening symptoms may require urgent medical or dental care.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton href={siteContent.contact.phoneHref} variant="red">
                <Phone className="h-4 w-4" />
                Call/Text Now
              </CTAButton>
            </div>
          </div>

          <div className="rounded-[3rem] bg-white p-6 shadow-2xl shadow-blue-900/10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#174A8B]">
              Choose a concern
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {concerns.map((concern) => (
                <button
                  key={concern.title}
                  type="button"
                  onClick={() => setSelectedConcern(concern)}
                  className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${
                    selectedConcern.title === concern.title
                      ? "border-[#174A8B] bg-blue-50 shadow-lg shadow-blue-900/10"
                      : "border-gray-100 bg-gray-50 hover:bg-white"
                  }`}
                >
                  <p className="font-black text-gray-950">{concern.title}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] bg-gray-950 p-6 text-white">
              <div className="flex gap-4">
                <HelpCircle className="h-7 w-7 flex-none text-blue-300" />
                <div>
                  <p className="text-2xl font-black">
                    {selectedConcern.title}
                  </p>
                  <p className="mt-3 leading-8 text-gray-300">
                    {selectedConcern.description}
                  </p>
                  <p className="mt-4 text-sm font-bold text-blue-200">
                    We confirm what is happening with an exam, images,
                    radiographs, and clinical testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Questions We Ask
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            The right questions help us understand the emergency.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pain patterns matter. Timing, triggers, swelling, prior dental work,
            and symptoms all help us decide what needs to be evaluated.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {questions.map((question, index) => (
            <article
              key={question}
              className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <p className="text-sm font-black text-[#174A8B]">
                Question {index + 1}
              </p>
              <p className="mt-3 font-black leading-7 text-gray-950">
                {question}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8">
            <Clock className="h-8 w-8 text-[#174A8B]" />
            <h3 className="mt-5 text-2xl font-black">
              We consider timing.
            </h3>
            <p className="mt-4 leading-8 text-gray-600">
              Sudden pain, worsening pain, pain that wakes you up, or pain that
              lingers may change how urgent the situation is.
            </p>
          </article>

          <article className="rounded-[2rem] border border-red-100 bg-red-50 p-8">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <h3 className="mt-5 text-2xl font-black">
              We look for warning signs.
            </h3>
            <p className="mt-4 leading-8 text-gray-600">
              Swelling, fever, trauma, drainage, or difficulty swallowing should
              be taken seriously and evaluated quickly.
            </p>
          </article>

          <article className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-[#174A8B]" />
            <h3 className="mt-5 text-2xl font-black">
              We confirm before treating.
            </h3>
            <p className="mt-4 leading-8 text-gray-600">
              Symptoms guide the conversation, but diagnosis comes from an exam,
              radiographs, images, and clinical testing.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#174A8B] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
              Need help deciding what to do next?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Call or text us before the symptoms get worse.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
              We can help you understand the next step and whether you should be
              evaluated urgently.
            </p>
          </div>

          <CTAButton href={siteContent.contact.phoneHref} variant="red">
            <Phone className="h-4 w-4" />
            Call/Text Now
          </CTAButton>
        </div>
      </section>
    </main>
  );
}