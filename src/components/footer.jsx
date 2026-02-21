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
    <footer className="relative overflow-hidden border-t border-slate-700/70 bg-[linear-gradient(180deg,#02040b_0%,#040915_45%,#060d1f_100%)] px-4 py-9 text-slate-100 shadow-[0_-20px_56px_rgba(2,6,23,0.58)] sm:px-8 sm:py-10 lg:px-12">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-violet-300/45" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900/56 via-slate-900/22 to-transparent" />
      <span className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <span className="pointer-events-none absolute -right-16 bottom-4 h-72 w-72 rounded-full bg-emerald-500/18 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr_0.95fr]" data-aos="fade-left">
          <div>
            <img src={rootsLogo} alt="ROOTS" width={150} className="h-auto w-auto object-contain" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-200">
              ROOTS builds practical digital systems for ambitious teams. We focus on quality,
              speed, and outcomes that hold up in the real world.
            </p>
            <div className="mt-3 space-y-2 text-xs text-slate-200">
              <p className="inline-flex items-center gap-2">
                <FiMapPin className="text-emerald-300" />
                Nigeria and South Africa
              </p>
              <p className="inline-flex items-center gap-2">
                <FiMail className="text-emerald-300" />
                info@rootswrld.com
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-200">Quick Links</p>
            <nav className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link key={item.id} to={item.id} smooth duration={800}>
                  <button className="rounded-lg px-2 py-2 text-left text-slate-100 transition-colors duration-200 hover:bg-white/10 hover:text-violet-200">
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-200">Follow ROOTS</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {SOCIAL_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-white/15 bg-white/5 px-3 py-3 transition-all duration-200 hover:border-violet-300/50 hover:bg-white/10"
                  >
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-100">
                      <Icon className="text-emerald-300" />
                      {item.name}
                    </div>
                  </a>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-200">
              Building something ambitious? Reach out through our contact form and we&apos;ll respond
              quickly.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/20 pt-3 text-center text-xs text-slate-300">
          <p>© {new Date().getFullYear()} ROOTS. Designed and built by ROOTS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
