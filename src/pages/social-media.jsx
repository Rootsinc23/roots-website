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
      className="roots-section relative overflow-hidden px-4 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          data-aos="fade-right"
          className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
        >
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/20 dark:bg-slate-950/65 dark:text-slate-300">
            <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
            Connect With ROOTS
          </p>
          <h2
            className="fx-title-glow mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Let&apos;s keep the conversation going beyond this page.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Follow our progress, updates, and insights across platforms. If you&apos;re building
            something ambitious, we&apos;d love to hear from you.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-300/80 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
              Typical response
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              Within 24 hours for most project inquiries.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="contact" smooth duration={800}>
              <button className="fx-card-lift inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Start a Conversation
                <FiArrowUpRight />
              </button>
            </Link>
            <Link to="services" smooth duration={800}>
              <button className="fx-card-lift rounded-full border border-slate-300/80 bg-white/86 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/25 dark:bg-slate-900/65 dark:text-white dark:hover:bg-slate-800/75">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-6"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-card-lift group rounded-2xl border border-slate-300/80 bg-white/86 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-[0_10px_24px_rgba(16,185,129,0.16)] dark:border-white/15 dark:bg-slate-950/65 dark:hover:border-emerald-300/40"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <Icon size={18} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{social.name}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">{social.handle}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-300">
                    Visit
                    <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-300/80 bg-white/86 p-4 dark:border-white/15 dark:bg-slate-950/65">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <FiMessageSquare className="text-emerald-600 dark:text-emerald-300" />
              Prefer direct contact?
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Share your project idea through our contact form and we&apos;ll respond with next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
