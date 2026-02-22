import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiMail, FiX } from "react-icons/fi";
import {
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  getApiErrorMessage,
  submitContact,
} from "../service/api";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);
  const toastTimersRef = useRef(new Map());

  const supportMessage = useMemo(() => {
    const contactName = name.trim() || "there";
    const contactMessage = message || "I would like to discuss a project with ROOTS.";
    return encodeURIComponent(`Hi ROOTS, my name is ${contactName}. ${contactMessage}`);
  }, [message, name]);

  const supportEmailUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("ROOTS Project Inquiry")}&body=${supportMessage}`;
  const whatsappNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${supportMessage}`;

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    const timer = toastTimersRef.current.get(id);
    if (timer) {
      window.clearTimeout(timer);
      toastTimersRef.current.delete(id);
    }
  }, []);

  const pushToast = useCallback(
    ({ type, title, message: toastMessage, showFallbackActions = false }) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

      setToasts((prev) => [...prev, { id, type, title, message: toastMessage, showFallbackActions }]);

      const timer = window.setTimeout(() => dismissToast(id), 5000);
      toastTimersRef.current.set(id, timer);
    },
    [dismissToast],
  );

  useEffect(
    () => () => {
      toastTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      toastTimersRef.current.clear();
    },
    [],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      pushToast({
        type: "error",
        title: "Missing fields",
        message: "Please fill in name, email, and message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContact({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        source: "roots-website",
      });

      pushToast({
        type: "success",
        title: "Message sent",
        message: result?.message || `Thanks ${trimmedName}. We will reach out shortly.`,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const apiMessage = getApiErrorMessage(error, "We could not submit your message right now.");

      pushToast({
        type: "error",
        title: "Message not sent",
        message: apiMessage,
        showFallbackActions: true,
      });

      console.error("Unable to submit contact form:", error?.message || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-4 text-slate-900 dark:text-slate-100">
      <div className="pointer-events-none fixed right-2 top-20 z-[90] flex w-[min(340px,calc(100vw-1rem))] flex-col gap-2.5 sm:right-6 sm:top-24 sm:w-[min(360px,calc(100vw-3rem))] sm:gap-3">
        {toasts.map((toast) => {
          const isSuccess = toast.type === "success";
          return (
            <div
              key={toast.id}
              className={`pointer-events-auto rounded-2xl border px-3.5 py-3 text-[13px] backdrop-blur-xl shadow-[0_16px_38px_rgba(15,23,42,0.26)] sm:px-4 sm:text-sm ${
                isSuccess
                  ? "border-emerald-300/45 bg-emerald-400/16 text-emerald-50"
                  : "border-rose-300/50 bg-rose-400/16 text-rose-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isSuccess ? "bg-emerald-300/22 text-emerald-200" : "bg-rose-300/24 text-rose-200"
                  }`}
                >
                  {isSuccess ? <FiCheckCircle size={14} /> : <FiAlertCircle size={14} />}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-tight text-white">{toast.title}</p>
                  <p className="mt-1 leading-relaxed text-white/90">{toast.message}</p>

                  {toast.showFallbackActions && (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={supportEmailUrl}
                        className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/14 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/22"
                      >
                        <FiMail size={12} />
                        Email Us
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-white/35 bg-white/14 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/22"
                      >
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  aria-label="Dismiss notification"
                  onClick={() => dismissToast(toast.id)}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-white/24"
                >
                  <FiX size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} method="post" className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4" data-aos="fade-up">
        <div>
          <label htmlFor="name" className="block text-left text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Miles"
            name="name"
            id="name"
            aria-label="name"
            autoComplete="name"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-300/80 bg-white px-3 py-2.5 text-[13px] text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 sm:mt-2 sm:py-3 sm:text-sm dark:border-white/20 dark:bg-slate-950/65 dark:text-white dark:focus:border-emerald-300 dark:focus:ring-emerald-500/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-sm font-semibold">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            name="email"
            id="email"
            aria-label="email-address"
            autoComplete="email"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-300/80 bg-white px-3 py-2.5 text-[13px] text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 sm:mt-2 sm:py-3 sm:text-sm dark:border-white/20 dark:bg-slate-950/65 dark:text-white dark:focus:border-emerald-300 dark:focus:ring-emerald-500/20"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-left text-sm font-semibold">
            Message
          </label>
          <textarea
            placeholder="How can we help?"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            aria-label="message"
            required
            className="mt-1.5 min-h-[124px] w-full rounded-xl border border-slate-300/80 bg-white px-3 py-2.5 text-[13px] text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 sm:mt-2 sm:min-h-[140px] sm:py-3 sm:text-sm dark:border-white/20 dark:bg-slate-950/65 dark:text-white dark:focus:border-emerald-300 dark:focus:ring-emerald-500/20"
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
