import { ExternalLink, Star } from "lucide-react";
import { reviews } from "../data/reviews";
import { siteContent } from "../data/siteContent";

type ReviewSectionProps = {
  compact?: boolean;
};

function GoogleReviewLabel() {
  return (
    <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 shadow-sm ring-1 ring-gray-100">
      <span className="text-sm font-black uppercase tracking-[0.22em]">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
        <span className="ml-2 text-red-600">Reviews</span>
      </span>
    </div>
  );
}

export function ReviewSection({ compact = false }: ReviewSectionProps) {
  return (
    <section
      className={
        compact
          ? "bg-white px-6 py-20"
          : "bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)] px-6 py-24"
      }
    >
      <div className="mx-auto max-w-3xl text-center">
        <GoogleReviewLabel />

        <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-6xl">
          What patients say.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Real patients. Real emergencies. Clear explanations when it matters
          most.
        </p>
      </div>

      <div
        className={
          compact
            ? "mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3"
            : "mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3"
        }
      >
        {reviews.map((review) => (
          <a
            key={review.name}
            href={siteContent.reviews.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${review.name}'s Google review`}
            className="group flex h-full flex-col rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 ring-4 ring-white shadow-sm">
  <img
    src={review.avatar}
    alt={`${review.name} Google reviewer avatar`}
    className="h-full w-full scale-110 object-cover object-center"
  />
</div>

                <div>
                  <p className="font-black text-gray-950">{review.name}</p>

                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#174A8B]">
                    Google Review
                  </p>
                </div>
              </div>

              <ExternalLink className="h-5 w-5 flex-none text-gray-300 transition group-hover:text-[#174A8B]" />
            </div>

            <div className="mt-6 flex items-center gap-1 text-yellow-500">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current text-yellow-500"
                />
              ))}
            </div>

            <p className="mt-6 flex-1 text-xl italic leading-9 text-gray-700">
              “{review.quote}...”
            </p>

            <p className="mt-6 text-sm font-bold text-gray-500">
              {review.service}
            </p>

            <p className="mt-6 text-sm font-black text-[#174A8B] transition group-hover:text-red-600">
              Click to view on Google
            </p>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-center gap-4 sm:flex-row">
        <a
          href={siteContent.reviews.googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#174A8B] px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-[#0E376A]"
        >
          Read More Google Reviews
          <ExternalLink className="h-4 w-4" />
        </a>

        <a
          href={siteContent.reviews.googleLeaveReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-4 text-sm font-black text-gray-950 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:bg-gray-50"
        >
          Leave a Google Review
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}