import { useEffect } from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMonitor,
  FiServer,
  FiShield,
  FiShoppingCart,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const SERVICES = [
  {
    title: "UI and UX Design",
    summary: "Interfaces that feel intuitive, coherent, and unmistakably premium.",
    items: ["User flows and journeys", "Wireframes and design systems", "Usability-first interaction patterns"],
    icon: FiLayers,
    accent: "from-cyan-400/30 to-transparent",
    iconStyle: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  },
  {
    title: "Web Engineering",
    summary: "Robust frontend and backend systems built for performance and scale.",
    items: ["React and modern frontend stacks", "API and backend architecture", "Production-ready deployment patterns"],
    icon: FiCode,
    accent: "from-violet-400/30 to-transparent",
    iconStyle: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  },
  {
    title: "E-commerce Platforms",
    summary: "Online stores designed for conversion, speed, and trust.",
    items: ["Catalog and checkout experiences", "Payments and order workflows", "Conversion-focused storefront UX"],
    icon: FiShoppingCart,
    accent: "from-emerald-400/30 to-transparent",
    iconStyle: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  },
  {
    title: "Web Applications",
    summary: "Custom applications tailored to complex real-world operations.",
    items: ["Role-based dashboards", "Workflow and automation modules", "Secure multi-user product foundations"],
    icon: FiMonitor,
    accent: "from-rose-400/30 to-transparent",
    iconStyle: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
  },
  {
    title: "Enterprise Solutions",
    summary: "Scalable systems with the reliability enterprise teams expect.",
    items: ["System architecture planning", "Performance and resilience design", "Compliance-aware implementation"],
    icon: FiServer,
    accent: "from-amber-400/30 to-transparent",
    iconStyle: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  },
  {
    title: "Maintenance and Support",
    summary: "Long-term care to keep your platform stable, fast, and secure.",
    items: ["Monitoring and bug resolution", "Security and dependency updates", "Continuous optimization support"],
    icon: FiShield,
    accent: "from-sky-400/30 to-transparent",
    iconStyle: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="services"
      data-tone="services"
      className="roots-section relative overflow-hidden px-4 py-12 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-300/35 blur-3xl dark:bg-emerald-500/16" />
      <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl dark:bg-cyan-500/14" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/75 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-300">
            <FiLayers className="text-emerald-600 dark:text-emerald-300" />
            Services
          </p>
          <h2
            className="fx-title-glow mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Product and engineering services built to move serious teams forward.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            ROOTS delivers end-to-end digital execution, from product thinking to launch and
            long-term support.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className={`fx-card-lift group relative overflow-hidden rounded-3xl border border-slate-300/70 bg-white/82 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.14)] dark:border-white/15 dark:bg-slate-900/65 dark:shadow-[0_14px_34px_rgba(2,6,23,0.4)] dark:hover:shadow-[0_20px_46px_rgba(2,6,23,0.48)] sm:p-5 ${idx > 3 ? "hidden sm:block" : ""}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${service.accent} opacity-70`}
                />

                <div className="relative">
                  <div className={`fx-pulse-glow inline-flex h-10 w-10 items-center justify-center rounded-full ${service.iconStyle}`}>
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                    {service.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 text-[11px] leading-relaxed text-slate-600 sm:text-xs dark:text-slate-300 ${
                          itemIdx > 1 ? "hidden md:flex" : ""
                        }`}
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 sm:mt-5 dark:text-emerald-300">
                    Build with ROOTS
                    <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
