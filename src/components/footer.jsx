import rootsLogo from "../assets/images/roots-logo.png";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { Link } from "react-scroll";
import { FiMail, FiMapPin } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "impact", label: "Impact" },
  { id: "social-media", label: "Social Media" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_ITEMS = [
  { name: "GitHub", href: "https://github.com/Rootsinc23", icon: SiGithub },
  { name: "X", href: "https://x.com/rootsinc2023?", icon: SiX },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/your-username", icon: SiLinkedin },
  { name: "Instagram", href: "https://www.instagram.com/rootsinc.2023/?", icon: SiInstagram },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-700/70 bg-[linear-gradient(180deg,#02040b_0%,#040915_45%,#060d1f_100%)] px-3 py-5 text-slate-100 shadow-[0_-20px_56px_rgba(2,6,23,0.58)] sm:px-8 sm:py-8 lg:px-12">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-violet-300/45" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-900/56 via-slate-900/22 to-transparent sm:h-20" />
      <span className="pointer-events-none absolute -left-24 top-6 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl sm:h-72 sm:w-72" />
      <span className="pointer-events-none absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-emerald-500/18 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-[1.05fr_0.95fr_0.95fr]" data-aos="fade-left">
          <div className="col-span-2 text-center sm:text-left lg:col-span-1">
            <img src={rootsLogo} alt="ROOTS" width={130} className="mx-auto h-auto w-auto object-contain sm:mx-0 sm:w-[150px]" />
            <p className="mt-2 hidden max-w-sm text-[13px] leading-relaxed text-slate-200 sm:block sm:text-sm">
              ROOTS builds practical digital systems for ambitious teams. We focus on quality,
              speed, and outcomes that hold up in the real world.
            </p>
            <div className="mt-2 space-y-1.5 text-[10px] text-slate-200 sm:mt-3 sm:space-y-2 sm:text-xs">
              <p className="inline-flex items-center gap-1.5 sm:gap-2">
                <FiMapPin className="text-emerald-300" />
                Nigeria and South Africa
              </p>
              <p className="inline-flex items-center gap-1.5 sm:gap-2">
                <FiMail className="text-emerald-300" />
                info@rootswrld.com
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-200">Quick Links</p>
            <nav className="mt-2 grid grid-cols-1 gap-1.5 text-[12px] sm:mt-3 sm:grid-cols-2 sm:gap-2 sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <Link key={item.id} to={item.id} smooth duration={800}>
                  <button className="rounded-lg px-2 py-1 text-left text-slate-100 transition-colors duration-200 hover:bg-white/10 hover:text-violet-200 sm:py-2">
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-200">Follow ROOTS</p>
            <div className="mt-2 grid grid-cols-1 gap-1.5 sm:mt-3 sm:grid-cols-2 sm:gap-2">
              {SOCIAL_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-white/15 bg-white/5 px-2.5 py-2 transition-all duration-200 hover:border-violet-300/50 hover:bg-white/10 sm:rounded-xl sm:px-3 sm:py-3"
                  >
                    <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-100 sm:gap-2 sm:text-sm">
                      <Icon className="text-emerald-300" />
                      {item.name}
                    </div>
                  </a>
                );
              })}
            </div>
            <p className="mt-3 hidden text-[11px] leading-relaxed text-slate-200 sm:block sm:text-xs">
              Building something ambitious? Reach out through our contact form and we&apos;ll respond
              quickly.
            </p>
          </div>
        </div>

        <div className="mt-3.5 border-t border-white/20 pt-2.5 text-center text-[10px] text-slate-300 sm:mt-5 sm:pt-3 sm:text-xs">
          <p>© {new Date().getFullYear()} ROOTS. Designed and built by ROOTS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
