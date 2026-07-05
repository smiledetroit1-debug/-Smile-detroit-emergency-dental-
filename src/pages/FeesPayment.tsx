import {
  CheckCircle2,
  CreditCard,
  FileText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { siteContent } from "../data/siteContent";

const paymentPoints = [
  "Emergency exam fee is explained before the visit.",
  "Treatment fees are separate from the emergency exam fee.",
  "Estimated treatment costs are reviewed before treatment begins.",
  "Patients may request an itemized receipt for possible out-of-network reimbursement.",
];

const clarityCards = [
  {
    icon: ShieldCheck,
    title: "Fee-for-service care",
    description:
      "We are a fee-for-service emergency dental office. Dental insurance is not accepted.",
  },
  {
    icon: CreditCard,
    title: "Clear pricing before treatment",
    description:
      "Before treatment begins, we explain the exam fee, treatment options, and estimated costs clearly.",
  },
  {
    icon: FileText,
    title: "Documentation available",
    description:
      "Patients may request an itemized receipt to submit to their insurance provider for possible out-of-network reimbursement.",
  },
];

export function FeesPayment() {
  return (
    <main className="bg-white">
      <section className="bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Fees & Payment
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl">
              Clear costs before emergency dental care begins.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We understand that dental emergencies can be stressful. Our goal
              is to explain the exam fee, treatment options, and estimated costs
              clearly before treatment begins.
            </p>

            <div className="mt-9">
              <CTAButton
                href={siteContent.contact.phoneHref}
                variant="red"
                showArrow={false}
              >
                <Phone className="h-4 w-4" />
                Call/Text About Pricing
              </CTAButton>
            </div>
          </div>

          <div className="rounded-[3rem] bg-gray-950 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
            <CreditCard className="h-12 w-12 text-blue-300" />

            <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-red-400">
              Emergency Exam Fee
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              $375 Emergency Exam Fee
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Treatment fees are separate. If treatment is recommended, we
              review the options and estimated costs before care begins.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">
                Call/Text First
              </p>

              <p className="mt-3 leading-8 text-gray-300">
                Call or text first so we can
                understand the concern, explain the emergency exam fee, and help
                prepare for the visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Insurance Policy
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-6xl">
            Fee-for-service emergency dentistry.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a fee-for-service office and do not accept dental insurance.
            This allows us to focus on urgent access, clear diagnosis, and
            treatment options without insurance delays or restrictions.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
          {clarityCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8 transition hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <Icon className="h-9 w-9 text-[#174A8B]" />

                <h3 className="mt-6 text-2xl font-black text-gray-950">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              What Patients Should Know
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              No surprises before treatment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every emergency is different. Some patients need diagnosis only.
              Some need same-day treatment. Some need a staged plan. We explain
              the findings and estimated costs before the patient decides how to
              move forward.
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

          <div className="rounded-[2.5rem] bg-white p-8 text-gray-950 md:p-10">
            <div className="grid gap-5">
              {paymentPoints.map((point) => (
                <div key={point} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-[#174A8B]" />

                  <p className="text-lg font-bold leading-8 text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] bg-blue-50 p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174A8B]">
                Important Note
              </p>

              <p className="mt-3 leading-8 text-gray-600">
                An itemized receipt does not guarantee reimbursement. Coverage
                decisions are made by the patient’s insurance provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-gray-100 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)] p-8 text-center shadow-2xl shadow-blue-900/10 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Call Before Visiting
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-6xl">
            Questions about pricing?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Call or text us first. We can explain the emergency exam fee, how
            the visit works, and what to expect before coming in.
          </p>

          <div className="mt-9">
            <CTAButton
              href={siteContent.contact.phoneHref}
              variant="red"
              showArrow={false}
            >
              <Phone className="h-4 w-4" />
              Call/Text {siteContent.contact.phoneDisplay}
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}