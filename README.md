# ROOTS Website

Marketing website for ROOTS, built with React + Vite + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

## Contact API configuration

Create a `.env` file in project root (or copy from `.env.example`) and set:

```bash
VITE_API_BASE_URL=https://api.rootswrld.com
VITE_CONTACT_ENDPOINT=/api/contact/save
VITE_SUBSCRIBE_ENDPOINT=/api/subscriber/save
# Optional comma-separated fallbacks:
# VITE_CONTACT_ENDPOINTS=/api/contact/save,/api/newsletter/save
# VITE_SUBSCRIBE_ENDPOINTS=/api/subscriber/save
VITE_SUPPORT_EMAIL=info@rootswrld.com
VITE_WHATSAPP_NUMBER=2349035085579
```

Notes:
- `VITE_API_BASE_URL` can be left empty to use same-origin API routes.
- The contact form now uses glass toasts for both success and error feedback.
- If API is unavailable, error toast provides email/WhatsApp fallback actions.
