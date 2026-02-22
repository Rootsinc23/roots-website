import { Link } from "react-scroll";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import heroBackground from "../assets/images/chromeDots.jpg";

const MyCarousel = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#060a16] text-white sm:min-h-[78vh]">
      <img
        src={heroBackground}
        alt="ROOTS technology workspace"
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#04070f]/96 via-[#060d1a]/90 to-[#071711]/76" />
      <span className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-violet-500/18 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-emerald-400/16 blur-3xl" />
      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-6xl items-center gap-6 px-3 pb-10 pt-28 text-white sm:min-h-[78vh] sm:gap-7 sm:px-6 sm:pb-14 sm:pt-28 lg:grid-cols-[1fr_320px] lg:pt-32">
        <div>
          <p className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-violet-300/35 bg-slate-900/42 px-3 py-1.5 text-[10px] uppercase tracking-[0.13em] text-slate-100 sm:mb-5 sm:px-3.5 sm:text-[11px] sm:tracking-[0.16em]">
            <FiStar className="text-emerald-300" />
            ROOTS Digital Product Studio
          </p>

          <h1
            className="max-w-[13.5ch] text-[1.95rem] font-semibold leading-[1.08] sm:max-w-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Simple ideas, beautifully engineered into products people trust.
          </h1>

          <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-slate-200/92 sm:mt-5 sm:max-w-2xl sm:text-base">
            We help teams move from concept to launch with clear product direction, elegant design,
            and stable delivery.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
            <Link to="contact" smooth duration={800} offset={-30} className="block">
              <button
                type="button"
                className="inline-flex w-full min-w-0 items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-3 py-3 text-[12px] font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto sm:gap-2 sm:px-6 sm:text-sm"
              >
                Start a Project
                <FiArrowUpRight />
              </button>
            </Link>

            <Link to="services" smooth duration={800} offset={-30} className="block">
              <button
                type="button"
                className="w-full min-w-0 rounded-full border border-white/45 bg-white/7 px-3 py-3 text-[12px] font-semibold text-white transition hover:bg-white/14 sm:w-auto sm:px-6 sm:text-sm"
              >
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <aside className="w-full max-w-sm rounded-2xl border border-violet-300/25 bg-slate-950/52 p-4 backdrop-blur-md sm:max-w-md sm:p-5 lg:max-w-[320px] lg:justify-self-end">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">What you get</p>
          <p className="mt-2 text-base leading-snug text-slate-50 sm:text-lg">
            Epic aesthetics, practical systems, and disciplined execution.
          </p>

          <div className="mt-4 space-y-2.5 text-[13px] text-slate-200/90 sm:mt-5 sm:space-y-3 sm:text-sm">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
              <span>Product Strategy</span>
              <span className="text-emerald-300">01</span>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
              <span>Design and Build</span>
              <span className="text-emerald-300">02</span>
            </div>
            <div className="flex items-center justify-between gap-3 pb-1">
              <span>Launch and Support</span>
              <span className="text-emerald-300">03</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MyCarousel;
