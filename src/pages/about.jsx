import { FiCode, FiCompass, FiLayers, FiPenTool, FiTarget, FiTrendingUp } from "react-icons/fi";

const VALUES = [
  {
    title: "Product Clarity",
    copy: "We align business goals, user outcomes, and technical direction before building.",
    icon: FiCompass,
  },
  {
    title: "Elegant Systems",
    copy: "Our design and engineering decisions stay clean, maintainable, and scalable.",
    icon: FiLayers,
  },
  {
    title: "Measured Impact",
    copy: "We connect every release to meaningful operational and growth outcomes.",
    icon: FiTrendingUp,
  },
];

const STATS = [
  { label: "Founded", value: "2023" },
  { label: "Approach", value: "Design + Engineering" },
  { label: "Focus", value: "Practical Innovation" },
];

const FLOW = [
  {
    id: "01",
    title: "Discover",
    copy: "Understand the problem space and define priorities.",
    icon: FiTarget,
  },
  {
    id: "02",
    title: "Design",
    copy: "Craft intuitive product flows and coherent visual systems.",
    icon: FiPenTool,
  },
  {
    id: "03",
    title: "Build",
    copy: "Deliver reliable software that teams can operate with confidence.",
    icon: FiCode,
  },
];

const About = () => {
  return (
    <section
      id="about"
      data-tone="about"
      data-aos="ease-in"
      className="roots-section relative overflow-hidden px-3 py-12 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/75 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600 dark:border-white/15 dark:bg-slate-950/55 dark:text-slate-300">
            <FiCompass className="text-emerald-600 dark:text-emerald-300" />
            About ROOTS
          </p>
          <h2
            className="fx-title-glow mt-4 text-[1.95rem] font-semibold leading-[1.12] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            We build digital products that feel refined and perform with purpose.
          </h2>
          <p className="mt-3.5 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">
            ROOTS is a product studio founded in 2023 by builders focused on practical innovation.
            We help teams move from concept to launch with clarity, speed, and long-term quality.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div data-aos="slide-right" className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/82 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-md sm:rounded-3xl sm:p-6 dark:border-white/15 dark:bg-slate-950/55 dark:shadow-[0_22px_52px_rgba(2,6,23,0.42)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">
              ROOTS Delivery Flow
            </p>
            <p className="mt-2 text-base font-semibold leading-snug text-slate-900 sm:text-lg dark:text-white">
              Strategy, design, and engineering connected as one system.
            </p>

            <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {FLOW.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="fx-card-lift grid grid-cols-[auto_1fr] gap-2.5 rounded-2xl border border-slate-300/70 bg-white/85 p-3 shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:gap-3 dark:border-white/15 dark:bg-slate-950/65"
                  >
                    <div className="flex flex-col items-center gap-2 pt-0.5">
                      <span className="fx-pulse-glow rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                        {step.id}
                      </span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 sm:h-8 sm:w-8 dark:bg-slate-800 dark:text-slate-200">
                        <Icon size={13} />
                      </span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">{step.title}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs dark:text-slate-300">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div data-aos="slide-left" className="space-y-3 sm:space-y-4">
            <div className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/82 p-4 text-[13px] leading-relaxed text-slate-700 shadow-[0_16px_36px_rgba(15,23,42,0.11)] sm:rounded-3xl sm:p-6 sm:text-sm dark:border-white/15 dark:bg-slate-950/55 dark:text-slate-200">
              ROOTS Technology Company was founded by a team that believes great software should be
              both beautiful and dependable. We focus on real operational value and craft systems
              that remain useful as products and teams evolve.
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/82 p-3.5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:p-4 dark:border-white/15 dark:bg-slate-950/55"
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {VALUES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/82 p-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:p-4 dark:border-white/15 dark:bg-slate-950/55"
                  >
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-8 sm:w-8 dark:bg-emerald-500/20 dark:text-emerald-300">
                      <Icon size={14} />
                    </div>
                    <p className="mt-2.5 text-[13px] font-semibold text-slate-900 sm:mt-3 sm:text-sm dark:text-white">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs dark:text-slate-300">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
