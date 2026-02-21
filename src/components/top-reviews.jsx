import { FiArrowUpRight, FiMessageSquare, FiStar } from "react-icons/fi";
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
  const featured = REVIEWS.find((item) => item.highlight);
  const others = REVIEWS.filter((item) => !item.highlight);

  return (
    <section
      className="roots-section relative overflow-hidden px-4 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
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
            className="fx-title-glow mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            What people say after building with ROOTS
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Feedback from founders, product teams, and operators who trusted us with critical
            digital products.
          </p>
        </div>

        {featured && (
          <article
            data-aos="fade-up"
            className="fx-card-lift mt-10 rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-950/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[auto_1fr] md:items-start">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <img
                  src={featured.avatar}
                  alt={featured.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-emerald-300/60 dark:ring-emerald-500/40"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{featured.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">{featured.role}</p>
                </div>
              </div>

              <div>
                {renderStars()}
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
                  “{featured.quote}”
                </p>
              </div>
            </div>
          </article>
        )}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((review, idx) => (
            <article
              key={review.id}
              data-aos="fade-up"
              data-aos-delay={idx * 70}
              className="fx-card-lift rounded-3xl border border-slate-300/75 bg-white/84 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/15 dark:bg-slate-950/62 dark:shadow-[0_14px_34px_rgba(2,6,23,0.4)]"
            >
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{review.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">{review.role}</p>
                </div>
              </div>

              <div className="mt-3">{renderStars()}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                “{review.quote}”
              </p>
            </article>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="fx-card-lift mt-6 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/62 sm:flex sm:items-center sm:justify-between"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
            Ready to build your own success story?
          </div>
          <Link to="contact" smooth duration={800}>
            <button className="fx-card-lift mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:mt-0">
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
