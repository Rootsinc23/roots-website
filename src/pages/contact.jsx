import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import Form from "../components/form";

const CONTACT_DETAILS = [
  {
    title: "Phone",
    value: ["+234 903 50 85579", "+27 66 167 4126"],
    icon: FiPhoneCall,
  },
  {
    title: "Email",
    value: ["info@rootswrld.com", "rootswrld.com"],
    icon: FiMail,
  },
  {
    title: "Location",
    value: ["Nigeria, South Africa", "Remote-friendly collaboration"],
    icon: FiMapPin,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      data-tone="contact"
      className="roots-section relative overflow-hidden px-4 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
    >
      <span className="fx-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
      <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/82 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/20 dark:bg-slate-950/65 dark:text-slate-300">
            <FiMail className="text-emerald-600 dark:text-emerald-300" />
            Contact ROOTS
          </p>
          <h2
            className="fx-title-glow mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Let&apos;s turn your idea into a solid product.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Share your goals with us and we&apos;ll recommend the best path from concept to launch.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            data-aos="fade-right"
            className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
              Speak With Us Directly
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We usually reply within 24 hours on business days.
            </p>

            <div className="mt-5 space-y-3">
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="fx-card-lift flex items-start gap-3 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      {item.value.map((line) => (
                        <p key={line} className="text-xs text-slate-600 dark:text-slate-300">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="fx-card-lift mt-4 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <FiClock className="text-emerald-600 dark:text-emerald-300" />
                Response Window
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Most inquiries are reviewed within 24 hours. Priority product requests are handled
                even faster.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
              Send a Message
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Tell us about your project scope, timeline, and goals.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
