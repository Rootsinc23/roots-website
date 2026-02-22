import { useMemo, useState } from "react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";
import j1 from "../assets/images/john1.webp";
import j2 from "../assets/images/john2.webp";
import j3 from "../assets/images/john3.webp";
import j4 from "../assets/images/jane.jpg";
import j5 from "../assets/images/jane2.jpg";
import { Link } from "react-scroll";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Wilson",
    role: "Designer",
    avatar: j4,
    quote:
      "Exceptional experience with ROOTS. They translated our vision into a sleek and efficient product while staying collaborative from start to finish.",
    highlight: true,
  },
  {
    id: 2,
    name: "John Larson",
    role: "Entrepreneur",
    avatar: j2,
    quote:
      "Their innovative thinking and fast delivery helped us launch successfully. ROOTS combines speed with real craftsmanship.",
  },
  {
    id: 3,
    name: "Elen Mei",
    role: "Data Analyst",
    avatar: j5,
    quote:
      "The team balanced usability and technical quality beautifully. Our platform now feels modern, stable, and easy to operate.",
  },
  {
    id: 4,
    name: "Ahmed Qatar",
    role: "Freelancer",
    avatar: j3,
    quote:
      "Professional, creative, and dependable. ROOTS listens deeply and executes with clarity across every milestone.",
  },
  {
    id: 5,
    name: "Christian Kuma",
    role: "Entrepreneur",
    avatar: j1,
    quote:
      "Complex requirements became an intuitive product. Working with ROOTS felt smooth, focused, and outcome-driven.",
  },
];

const renderStars = () => (
  <div className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-300">
    {[0, 1, 2, 3, 4].map((idx) => (
      <FiStar key={idx} size={14} className="fill-current" />
    ))}
  </div>
);

const TopReviews = () => {
  const reviews = useMemo(() => {
    const featured = REVIEWS.find((item) => item.highlight);
    if (!featured) return REVIEWS;
    return [featured, ...REVIEWS.filter((item) => item.id !== featured.id)];
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];
  const totalReviews = reviews.length;

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  return (
    <section
      className="roots-section relative overflow-hidden px-3 py-12 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
      data-tone="reviews"
      id="reviews"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/82 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/20 dark:bg-slate-950/65 dark:text-slate-300">
            <FiStar className="text-amber-500 dark:text-amber-300" />
            Client Reviews
          </p>
          <h2
            className="fx-title-glow mt-4 text-[1.95rem] font-semibold leading-[1.12] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            What people say after building with ROOTS
          </h2>
          <p className="mt-3.5 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">
            Feedback from founders, product teams, and operators who trusted us with critical
            digital products.
          </p>
        </div>

        {activeReview && (
          <div
            data-aos="fade-up"
            className="mt-8 rounded-2xl border border-slate-300/75 bg-white/86 p-3.5 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-950/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:mt-10 sm:rounded-3xl sm:p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
                  Review {activeIndex + 1} of {totalReviews}
                </p>
                <div className="mt-1">{renderStars()}</div>
              </div>
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous review"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <FiChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next review"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>

            <article
              key={activeReview.id}
              className="mt-3.5 rounded-2xl border border-slate-300/75 bg-white/84 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.07)] dark:border-white/12 dark:bg-slate-950/58 dark:shadow-[0_12px_28px_rgba(2,6,23,0.3)] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-300/45 sm:h-12 sm:w-12 dark:ring-emerald-500/30"
                />
                <div>
                  <p className="text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">
                    {activeReview.name}
                  </p>
                  <p className="text-[11px] text-slate-500 sm:text-xs dark:text-slate-300">
                    {activeReview.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-slate-700 sm:text-base dark:text-slate-200">
                “{activeReview.quote}”
              </p>
            </article>

            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              {reviews.map((review, idx) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show review ${idx + 1}`}
                  aria-current={idx === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === activeIndex
                      ? "w-6 bg-emerald-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-white/25 dark:hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div
          data-aos="fade-up"
          className="fx-card-lift mt-5 rounded-2xl border border-slate-300/75 bg-white/84 p-3.5 dark:border-white/15 dark:bg-slate-950/62 sm:mt-6 sm:flex sm:items-center sm:justify-between sm:p-4"
        >
          <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">
            <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
            Ready to build your own success story?
          </div>
          <Link to="contact" smooth duration={800}>
            <button className="fx-card-lift mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-[13px] font-semibold text-slate-950 transition hover:bg-emerald-400 sm:mt-0 sm:w-auto sm:py-2 sm:text-sm">
              Start a Project
              <FiArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopReviews;
