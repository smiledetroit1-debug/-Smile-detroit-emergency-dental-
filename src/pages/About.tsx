import {
  Award,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import { ReviewSection } from "../components/ReviewSection";
export function About() {
  return (
    <main className="bg-white">
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl shadow-gray-300/40 lg:sticky lg:top-32">
            <img
  src="/images/doctor-clinic.jpg"
  alt="Dr. Anthonio McFadden in the dental clinic"
  className="image-pop-reveal h-[720px] w-full object-cover object-center"
/>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Meet The Doctor
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl">
              Meet Dr. McFadden.
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-600">
              Dr. Anthonio McFadden’s journey to dentistry began in Downriver,
              Michigan, where he was raised by his hardworking single mother.
              From an early age, he carried a strong sense of purpose, recalling
              how the physician who delivered him remarked that his hands were
              meant for either basketball or medicine.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              While he was recruited for basketball in middle school, his true
              passion was science. By high school, he made the decision to focus
              entirely on academics while working 40 hours a week at McDonald’s
              after school to support himself.
            </p>

            <div className="mt-8 grid gap-5">
              <article className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="flex gap-4">
                  <GraduationCap className="h-8 w-8 flex-none text-[#174A8B]" />

                  <div>
                    <h2 className="text-2xl font-black text-gray-950">
                      University of Michigan foundation
                    </h2>

                    <p className="mt-3 leading-8 text-gray-600">
                      His dedication earned him a place at the University of
                      Michigan, where he studied biochemistry and led the
                      largest Minority Association of Pre-Medical and
                      Pre-Dental Students chapter in the state.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-red-100 bg-red-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/10">
                <div className="flex gap-4">
                  <HeartHandshake className="h-8 w-8 flex-none text-red-600" />

                  <div>
                    <h2 className="text-2xl font-black text-gray-950">
                      Mentorship and service
                    </h2>

                    <p className="mt-3 leading-8 text-gray-600">
                      His commitment to mentorship has remained a core part of
                      his mission, guiding over 100 students into dental school,
                      medical pathways, and STEM careers.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <div className="flex gap-4">
                  <Stethoscope className="h-8 w-8 flex-none text-[#174A8B]" />

                  <div>
                    <h2 className="text-2xl font-black text-gray-950">
                      Advanced emergency and surgical experience
                    </h2>

                    <p className="mt-3 leading-8 text-gray-600">
                      Dr. McFadden’s drive and talent led to his recruitment
                      straight from dental school to one of the nation’s largest
                      dental practices. There, he developed experience in
                      complex oral surgery, endodontics, implant placement, and
                      periodontal surgery.
                    </p>

                    <p className="mt-4 leading-8 text-gray-600">
                      He later took on leadership roles in emergency dentistry,
                      becoming known for patient-centered care, clear diagnosis,
                      efficient treatment planning, and high-acuity emergency
                      treatment.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
              Recognition
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              2025 40 Under 40 Honoree.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dr. McFadden was recognized as a 2025 40 Under 40 honoree,
              reflecting his work ethic, clinical drive, mentorship, and
              commitment to expanding access to advanced dental care.
            </p>
            <a
  href="https://issuu.com/ndapublications/docs/40_under_40_-_final"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 text-sm font-black text-gray-950 shadow-xl shadow-yellow-300/10 transition hover:-translate-y-1 hover:bg-yellow-200"
>
  View Magazine Feature
  <ExternalLink className="h-4 w-4" />
</a>
            <div className="mt-8 rounded-[2rem] border border-yellow-300/20 bg-white/10 p-6">
              <div className="flex gap-4">
                <Award className="h-8 w-8 flex-none text-yellow-300" />

                <div>
                  <p className="font-black text-white">
                    Built on discipline, education, and service.
                  </p>

                  <p className="mt-2 leading-7 text-gray-300">
                    The recognition supports the larger mission of Smile
                    Detroit: helping patients understand their care, access
                    urgent treatment, and feel respected during stressful dental
                    emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[3rem] bg-white p-3 shadow-2xl shadow-yellow-300/10">
            <img
  src="/images/forty-under-forty.jpg"
  alt="Dr. Anthonio McFadden 2025 40 Under 40 Honoree"
  className="image-pop-reveal max-h-[720px] w-full rounded-[2.5rem] object-cover object-top"
/>
          </div>
        </div>
      </section>
      <ReviewSection compact />
    </main>
  );
}