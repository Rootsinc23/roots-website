import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./preloader.css";
import rootsLogo from "../assets/images/roots-logo.png";

const STARS = [
  { x: 8, y: 16, size: 2.1, delay: 0.2 },
  { x: 18, y: 72, size: 2.8, delay: 0.8 },
  { x: 26, y: 34, size: 2.4, delay: 1.2 },
  { x: 40, y: 12, size: 2.2, delay: 1.5 },
  { x: 58, y: 22, size: 2.6, delay: 0.4 },
  { x: 73, y: 11, size: 2.3, delay: 1.9 },
  { x: 82, y: 48, size: 3, delay: 0.6 },
  { x: 69, y: 77, size: 2.2, delay: 1.4 },
  { x: 48, y: 84, size: 2.8, delay: 0.9 },
  { x: 28, y: 90, size: 2.1, delay: 1.8 },
];

const STATUS_WORDS = ["Architecture", "Engineering", "Deployment"];
const EXIT_MS = 2100;
const HIDE_MS = 2700;

const Preloader = () => {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setPhase("exit"), EXIT_MS);
    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = previousOverflow;
    }, HIDE_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "hidden" || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={`preloader ${phase === "exit" ? "preloader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading ROOTS website"
    >
      <div className="preloader__bg" />

      <div className="preloader__stars" aria-hidden="true">
        {STARS.map((star, index) => (
          <span
            key={`star-${index}`}
            className="preloader__star"
            style={{
              "--star-x": `${star.x}%`,
              "--star-y": `${star.y}%`,
              "--star-size": `${star.size}px`,
              "--star-delay": `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <section className="preloader__panel">
        <div className="preloader__emblem" aria-hidden="true">
          <span className="preloader__orbit preloader__orbit--outer" />
          <span className="preloader__orbit preloader__orbit--inner" />
          <div className="preloader__logo-shell">
            <img src={rootsLogo} alt="ROOTS" className="preloader__logo" />
          </div>
        </div>

        <p className="preloader__brand">ROOTS</p>
        <p className="preloader__tagline">Digital Systems, Built To Endure</p>

        <div className="preloader__status" aria-hidden="true">
          <span className="preloader__status-label">Initializing</span>
          <div className="preloader__status-window">
            <div className="preloader__status-track">
              {STATUS_WORDS.map((word) => (
                <span className="preloader__status-word" key={word}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="preloader__bar" aria-hidden="true">
          <span className="preloader__bar-fill" />
          <span className="preloader__bar-glow" />
        </div>
      </section>
    </div>,
    document.body,
  );
};

export default Preloader;
