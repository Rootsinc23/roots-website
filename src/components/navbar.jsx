import { useEffect, useState } from "react";
import rootsLogo from "../assets/images/roots-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "impact", label: "Impact" },
  { id: "social-media", label: "Social Media" },
  { id: "contact", label: "Contact" },
];

const THEME_OPTIONS = [
  { text: "light", icon: FaSun, ariaLabel: "Use light theme" },
  { text: "dark", icon: FaMoon, ariaLabel: "Use dark theme" },
  { text: "system", icon: FaDesktop, ariaLabel: "Use system theme" },
];

const NAV_OFFSET = -88;

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const root = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selectedTheme) => {
      const shouldUseDark = selectedTheme === "dark" || (selectedTheme === "system" && darkQuery.matches);
      root.classList.toggle("dark", shouldUseDark);
    };

    applyTheme(theme);

    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }

    const handleQueryChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    darkQuery.addEventListener("change", handleQueryChange);
    return () => darkQuery.removeEventListener("change", handleQueryChange);
  }, [theme]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMenu(false);
  };

  const linkClass = (id) =>
    `rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-all duration-200 ${
      activeLink === id
        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400 dark:text-slate-950 dark:shadow-[0_8px_18px_rgba(16,185,129,0.34)]"
        : "text-slate-700 hover:bg-slate-900/10 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/14 dark:hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 lg:px-8">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1300px] items-center justify-between rounded-2xl border border-slate-300/70 bg-white/74 px-3 shadow-[0_10px_28px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/22 dark:bg-slate-950/82 dark:shadow-[0_12px_34px_rgba(2,6,23,0.46)] sm:h-[5rem] sm:px-4">
        <div className="flex items-center">
          <img
            src={rootsLogo}
            alt="ROOTS logo"
            className="h-12 w-auto object-contain brightness-110 contrast-150 saturate-[1.7] drop-shadow-[0_0_22px_rgba(52,211,153,0.42)] sm:h-14 lg:h-16"
          />
        </div>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.id} smooth duration={800} offset={NAV_OFFSET}>
              <button type="button" onClick={() => handleLinkClick(item.id)} className={linkClass(item.id)}>
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 rounded-full border border-slate-300/70 bg-white/72 p-1 md:flex dark:border-white/22 dark:bg-slate-900/80">
            {THEME_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.text}
                  type="button"
                  aria-label={opt.ariaLabel}
                  title={opt.ariaLabel}
                  onClick={() => setTheme(opt.text)}
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
                    theme === opt.text
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-600 hover:bg-slate-900/10 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/14 dark:hover:text-white"
                  }`}
                >
                  <Icon size={12} />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/75 text-slate-700 transition-all duration-200 hover:bg-slate-900/10 xl:hidden dark:border-white/22 dark:text-slate-100 dark:hover:bg-white/14"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
          </button>
        </div>
      </div>

      {showMenu && (
        <nav className="mx-auto mt-2 flex w-full max-w-[1300px] flex-col gap-2 rounded-2xl border border-slate-300/80 bg-white/92 p-3 text-slate-900 shadow-[0_16px_44px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-white/22 dark:bg-slate-950/94 dark:text-white dark:shadow-[0_16px_44px_rgba(2,6,23,0.52)] xl:hidden">
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.id} smooth duration={800} offset={NAV_OFFSET}>
              <button type="button" onClick={() => handleLinkClick(item.id)} className={`${linkClass(item.id)} w-full`}>
                {item.label}
              </button>
            </Link>
          ))}

          <div className="mt-1 flex items-center justify-center gap-1 rounded-full border border-slate-300/75 bg-white/80 p-1 dark:border-white/22 dark:bg-slate-900/82">
            {THEME_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.text}
                  type="button"
                  aria-label={opt.ariaLabel}
                  title={opt.ariaLabel}
                  onClick={() => setTheme(opt.text)}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                    theme === opt.text
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-600 hover:bg-slate-900/10 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/14 dark:hover:text-white"
                  }`}
                >
                  <Icon size={13} />
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
