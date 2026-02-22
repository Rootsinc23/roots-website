import { Link } from "react-scroll";
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@R-O-O-T-S",
    href: "https://github.com/R-O-O-T-S",
    icon: SiGithub,
  },
  {
    name: "X",
    handle: "@rootsinc2023",
    href: "https://x.com/rootsinc2023?",
    icon: SiX,
  },
  {
    name: "LinkedIn",
    handle: "ROOTS Network",
    href: "https://www.linkedin.com/in/your-username",
    icon: SiLinkedin,
  },
  {
    name: "Instagram",
    handle: "@rootsinc.2023",
    href: "https://www.instagram.com/rootsinc.2023/?",
    icon: SiInstagram,
  },
];

const SocialMedia = () => {
  return (
    <section
      id="social-media"
      data-tone="social"
      className="roots-section relative overflow-hidden px-3 py-12 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          data-aos="fade-right"
          className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/86 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:rounded-3xl sm:p-8"
        >
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/20 dark:bg-slate-950/65 dark:text-slate-300">
            <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
            Connect With ROOTS
          </p>
          <h2
            className="fx-title-glow mt-4 text-[1.95rem] font-semibold leading-[1.12] text-slate-900 dark:text-white sm:text-4xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Let&apos;s keep the conversation going beyond this page.
          </h2>

          <p className="mt-3.5 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">
            Follow our progress, updates, and insights across platforms. If you&apos;re building
            something ambitious, we&apos;d love to hear from you.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-300/80 bg-white/84 p-3.5 sm:mt-6 sm:p-4 dark:border-white/15 dark:bg-slate-950/65">
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
              Typical response
            </p>
            <p className="mt-1 text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">
              Within 24 hours for most project inquiries.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2 sm:mt-6 sm:flex sm:flex-row sm:gap-3">
            <Link to="contact" smooth duration={800}>
              <button className="fx-card-lift inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-[13px] font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto sm:px-5 sm:text-sm">
                Start a Conversation
                <FiArrowUpRight />
              </button>
            </Link>
            <Link to="services" smooth duration={800}>
              <button className="fx-card-lift w-full rounded-full border border-slate-300/80 bg-white/86 px-4 py-3 text-[13px] font-semibold text-slate-900 transition hover:bg-white sm:w-auto sm:px-5 sm:text-sm dark:border-white/25 dark:bg-slate-900/65 dark:text-white dark:hover:bg-slate-800/75">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="fx-card-lift rounded-2xl border border-slate-300/70 bg-white/86 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:rounded-3xl sm:p-6"
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-card-lift group min-w-0 rounded-xl border border-slate-300/80 bg-white/86 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-[0_10px_24px_rgba(16,185,129,0.16)] sm:rounded-2xl sm:p-4 dark:border-white/15 dark:bg-slate-950/65 dark:hover:border-emerald-300/40"
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-10 sm:w-10 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <Icon size={15} />
                  </div>
                  <p className="mt-2 text-[12px] font-semibold leading-snug text-slate-900 sm:mt-3 sm:text-sm dark:text-white">
                    {social.name}
                  </p>
                  <p className="mt-1 truncate text-[10px] text-slate-500 sm:text-[11px] dark:text-slate-300">
                    {social.handle}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-600 sm:mt-3 sm:text-[11px] sm:tracking-[0.12em] dark:text-emerald-300">
                    Visit
                    <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-3.5 rounded-2xl border border-slate-300/80 bg-white/86 p-3.5 sm:mt-4 sm:p-4 dark:border-white/15 dark:bg-slate-950/65">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-900 sm:text-sm dark:text-white">
              <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
              Prefer direct contact?
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-xs dark:text-slate-300">
              Share your project idea through our contact form and we&apos;ll respond with next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
