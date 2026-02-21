import { FiActivity, FiBarChart2, FiClock, FiZap } from "react-icons/fi";

const METRICS = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Client Satisfaction", value: "95%" },
  { label: "Average Delivery", value: "6-10 weeks" },
  { label: "Support Coverage", value: "Ongoing" },
];

const IMPACT_POINTS = [
  {
    title: "Faster Product Launches",
    copy: "Clear planning and disciplined execution reduce rework and speed up go-live.",
    icon: FiClock,
  },
  {
    title: "Reliable System Performance",
    copy: "Stable architecture and observability practices keep production dependable.",
    icon: FiActivity,
  },
  {
    title: "Data-Driven Growth",
    copy: "Measurement and iteration cycles help products improve with real evidence.",
    icon: FiBarChart2,
  },
];

const Impact = () => {
  return (
    <section
      id="impact"
      data-tone="impact"
      className="roots-section relative overflow-hidden px-4 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/75 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600 dark:border-white/15 dark:bg-slate-950/55 dark:text-slate-300">
            <FiZap className="text-emerald-600 dark:text-emerald-300" />
            Impact
          </p>
          <h2
            className="fx-title-glow mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            What teams gain when they build with ROOTS
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            We focus on outcomes, not just outputs. These are the results our process is designed to produce.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/82 p-4 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:border-white/15 dark:bg-slate-950/55"
            >
              <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {IMPACT_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/82 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/15 dark:bg-slate-950/55 dark:shadow-[0_14px_34px_rgba(2,6,23,0.4)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.copy}</p>
              </article>
            );
          })}
        </div>

        <div className="fx-card-lift mt-8 rounded-3xl border border-slate-300/70 bg-white/82 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/15 dark:bg-slate-950/55 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
              Build with confidence
            </p>
            <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">
              We turn strategy into shippable products with speed, quality, and long-term clarity.
            </p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300 md:mt-0">
            <FiZap size={16} />
            ROOTS Outcome Framework
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
