import { FileText, Phone, ShieldCheck } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { siteContent } from "../data/siteContent";

export function InsuranceNotice() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gray-950 text-white shadow-2xl shadow-gray-300/40">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">
              Fee-for-Service Care
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">
              We do not accept dental insurance.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a fee-for-service emergency dental office. This allows us
              to focus on urgent access, clear diagnosis, and treatment options
              without insurance delays or restrictions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Before treatment begins, we explain the exam fee, available
              treatment options, and estimated costs clearly so patients can
              make an informed decision.
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

          <div className="bg-white p-8 text-gray-950 md:p-12 lg:p-14">
            <div className="grid gap-5">
              <article className="rounded-[2rem] bg-blue-50 p-6">
                <ShieldCheck className="h-8 w-8 text-[#174A8B]" />

                <h3 className="mt-5 text-2xl font-black">
                  Clear costs before care
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  We discuss fees before treatment begins so patients understand
                  the cost before making a decision.
                </p>
              </article>

              <article className="rounded-[2rem] bg-red-50 p-6">
                <FileText className="h-8 w-8 text-red-600" />

                <h3 className="mt-5 text-2xl font-black">
                  Documentation available
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  Patients may request an itemized receipt to submit to their
                  insurance provider for possible out-of-network reimbursement.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
