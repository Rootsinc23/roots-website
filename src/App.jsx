import "./App.css";
import Home from "./pages/home-page";
import Impact from "./pages/impact";
import SocialMedia from "./pages/social-media";
import TopReviews from "./components/top-reviews";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import About from "./pages/about";
import Services from "./pages/services";
import Preloader from "./components/preloader";
import Scrollup from "./components/scrollup";
import { Link } from "react-scroll";
import { FiCheckCircle, FiCpu, FiGitMerge, FiTarget, FiUsers, FiZap } from "react-icons/fi";

function App() {

  return (
    <>
      <Preloader /> 

      <div className="roots-page">
        <Home />
        <About />
        <Services />
        <Impact />
        <section
          className="roots-section relative overflow-hidden px-4 py-16 text-slate-900 sm:px-8 lg:px-12 dark:text-slate-100"
          data-tone="program"
        >
          <span className="fx-float-slow pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/14" />
          <span className="fx-float-reverse pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/12" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
            <p className="fx-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/82 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/20 dark:bg-slate-950/65 dark:text-slate-300">
              <FiZap className="text-emerald-600 dark:text-emerald-300" />
              ROOTS Build Program
            </p>
            <h2
              className="fx-title-glow mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
              style={{ fontFamily: '"Ibarra Real Nova", serif' }}
            >
                A stronger way to build your career and ship meaningful software.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                This is where talent meets structure. We combine mentorship, quality systems, and
                execution discipline to help people and products grow together.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                data-aos="fade-right"
                className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                  What You&apos;ll Experience
                </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <FiUsers size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Hands-on Collaboration</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Work with designers, engineers, and product leads in tight feedback loops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                    <FiTarget size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Outcome-Driven Delivery</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Every sprint is mapped to real product goals and business impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                    <FiCpu size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Technical Mastery</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      Build on production-grade architecture with quality and reliability standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="contact" smooth duration={800}>
                  <button className="fx-card-lift rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                    Let&apos;s Talk ↗
                  </button>
                </Link>
                <Link to="social-media" smooth duration={800}>
                  <button className="fx-card-lift rounded-full border border-slate-300/80 bg-white/86 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/25 dark:bg-slate-900/65 dark:text-white dark:hover:bg-slate-800/75">
                    Explore Culture
                  </button>
                </Link>
              </div>
              </div>

              <div
                data-aos="fade-left"
                className="fx-card-lift rounded-3xl border border-slate-300/70 bg-white/86 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.1)] dark:border-white/15 dark:bg-slate-900/62 dark:shadow-[0_16px_38px_rgba(2,6,23,0.45)] sm:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">
                  Execution Framework
                </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <FiZap size={16} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Discover</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Scope and priorities</p>
                </div>

                <div className="rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                    <FiGitMerge size={16} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Build</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Ship in iterative cycles</p>
                </div>

                <div className="rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                    <FiCheckCircle size={16} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Scale</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Measure and optimize</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-300/75 bg-white/84 p-4 dark:border-white/15 dark:bg-slate-950/65">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                  Current Focus Tracks
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Product Design", "Frontend", "Backend", "QA", "DevOps", "Support"].map((track) => (
                    <span
                      key={track}
                      className="rounded-full border border-slate-300/80 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 dark:border-white/20 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {track}
                    </span>
                  ))}
                </div>
              </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  This isn&apos;t just a role list. It&apos;s a structured pathway for builders who want to
                  produce excellent work consistently.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SocialMedia />
        <TopReviews />
        <Contact />
        <Scrollup />
        <Footer />
      </div>
    </>
  );
}

export default App;
