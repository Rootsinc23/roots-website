import { Link } from "react-scroll";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import heroBackground from "../assets/images/chromeDots.jpg";

const MyCarousel = () => {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-[#060a16] text-white">
      <img
        src={heroBackground}
        alt="ROOTS technology workspace"
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#04070f]/96 via-[#060d1a]/90 to-[#071711]/76" />
      <span className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-violet-500/18 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-emerald-400/16 blur-3xl" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#070f1f]/45 to-[#081225]/88" />

      <div className="relative z-10 mx-auto grid min-h-[76vh] max-w-6xl items-center gap-8 px-6 pb-14 pt-28 text-white md:grid-cols-[1fr_320px] md:pt-32">
        <div>
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/35 bg-slate-900/42 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-100">
            <FiStar className="text-emerald-300" />
            ROOTS Digital Product Studio
          </p>

          <h1
            className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Ibarra Real Nova", serif' }}
          >
            Simple ideas, beautifully engineered into products people trust.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/92 sm:text-base">
            We help teams move from concept to launch with clear product direction, elegant design,
            and stable delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="contact" smooth duration={800} offset={-30}>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Start a Project
                <FiArrowUpRight />
              </button>
            </Link>

            <Link to="services" smooth duration={800} offset={-30}>
              <button
                type="button"
                className="rounded-full border border-white/45 bg-white/7 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
              >
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-violet-300/25 bg-slate-950/52 p-5 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">What you get</p>
          <p className="mt-2 text-lg leading-snug text-slate-50">
            Epic aesthetics, practical systems, and disciplined execution.
          </p>

          <div className="mt-5 space-y-3 text-sm text-slate-200/90">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Product Strategy</span>
              <span className="text-emerald-300">01</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Design and Build</span>
              <span className="text-emerald-300">02</span>
            </div>
            <div className="flex items-center justify-between pb-1">
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
