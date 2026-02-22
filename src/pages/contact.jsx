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
      className="roots-section relative overflow-hidden px-3 py-12 text-slate-900 sm:px-8 sm:py-20 lg:px-12 dark:text-slate-100"
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
            className="fx-title-glow mt-4 text-[1.95rem] font-semibold leading-[1.12] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Let&apos;s turn your idea into a solid product.
          </h2>
          <p className="mt-3.5 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">
            Share your goals with us and we&apos;ll recommend the best path from concept to launch.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            data-aos="fade-right"
            className="relative overflow-hidden rounded-xl border border-slate-300/75 bg-white/88 p-3.5 shadow-[0_10px_22px_rgba(15,23,42,0.07)] dark:border-white/15 dark:bg-slate-900/60 dark:shadow-[0_12px_24px_rgba(2,6,23,0.28)] sm:rounded-2xl sm:p-6"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-300/25 via-cyan-300/10 to-transparent dark:from-emerald-400/12 dark:via-cyan-400/6" />
            <span className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl dark:bg-emerald-400/10" />

            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-400/8 dark:text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                Direct Contact
              </p>

              <h3 className="mt-2.5 text-base font-semibold text-slate-900 sm:text-xl dark:text-white">
                Speak With Us Directly
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm dark:text-slate-300">
                We usually reply within 24 hours on business days.
              </p>

              <div className="mt-3.5 space-y-2 sm:mt-4 sm:space-y-2.5">
                {CONTACT_DETAILS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-2.5 rounded-xl border border-slate-300/70 bg-gradient-to-r from-white/90 to-white/75 p-3 transition-all duration-200 hover:border-emerald-300/50 hover:shadow-[0_8px_18px_rgba(16,185,129,0.08)] sm:p-3.5 dark:border-white/12 dark:from-slate-950/70 dark:to-slate-950/45 dark:hover:border-emerald-300/25 dark:hover:shadow-[0_10px_22px_rgba(16,185,129,0.08)]"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-300/35 bg-gradient-to-br from-emerald-100 to-cyan-100 shadow-[0_4px_10px_rgba(16,185,129,0.12)] sm:h-9 sm:w-9 dark:border-emerald-300/20 dark:from-emerald-400/20 dark:to-cyan-400/10 dark:shadow-[0_6px_12px_rgba(16,185,129,0.08)]">
                        <Icon
                          size={16}
                          className="text-emerald-700 opacity-100 dark:text-emerald-100"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold text-slate-900 sm:text-[13px] dark:text-white">
                          {item.title}
                        </p>
                        {item.value.map((line) => (
                          <p
                            key={line}
                            className="text-[10px] leading-relaxed text-slate-600 sm:text-[11px] dark:text-slate-300"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-2.5 rounded-xl border border-slate-300/70 bg-gradient-to-r from-white/90 to-white/78 p-3 sm:mt-3 sm:p-3.5 dark:border-white/12 dark:from-slate-950/70 dark:to-slate-950/45">
                <div className="flex items-start gap-2.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-300/35 bg-gradient-to-br from-emerald-100 to-cyan-100 shadow-[0_4px_10px_rgba(16,185,129,0.12)] dark:border-emerald-300/20 dark:from-emerald-400/20 dark:to-cyan-400/10 dark:shadow-[0_6px_12px_rgba(16,185,129,0.08)]">
                    <FiClock className="text-emerald-700 dark:text-emerald-100" size={15} />
                  </span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-900 sm:text-[13px] dark:text-white">
                      Response Window
                    </div>
                    <p className="mt-1 text-[10px] leading-relaxed text-slate-600 sm:text-[11px] dark:text-slate-300">
                      Most inquiries are reviewed within 24 hours. Priority product requests are handled
                      even faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-xl border border-slate-300/75 bg-white/88 p-3.5 shadow-[0_10px_22px_rgba(15,23,42,0.07)] dark:border-white/15 dark:bg-slate-900/60 dark:shadow-[0_12px_24px_rgba(2,6,23,0.28)] sm:rounded-2xl sm:p-6"
          >
            <h3 className="text-base font-semibold text-slate-900 sm:text-xl dark:text-white">
              Send a Message
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm dark:text-slate-300">
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
