import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact/save";
const SUBSCRIBE_ENDPOINT = import.meta.env.VITE_SUBSCRIBE_ENDPOINT || "/api/subscriber/save";

const CONTACT_ENDPOINTS = buildEndpointList(
  import.meta.env.VITE_CONTACT_ENDPOINTS,
  CONTACT_ENDPOINT,
  "/api/contact/save",
  "/api/newsletter/save",
);
const SUBSCRIBE_ENDPOINTS = buildEndpointList(
  import.meta.env.VITE_SUBSCRIBE_ENDPOINTS,
  SUBSCRIBE_ENDPOINT,
  "/api/subscriber/save",
);

export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL || "info@rootswrld.com";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "2349035085579";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});

function buildEndpointList(...sources) {
  return Array.from(
    new Set(
      sources
        .flatMap((value) => String(value || "").split(","))
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  );
}

function shouldTryNextEndpoint(error, isLast) {
  if (isLast) return false;

  const status = error?.response?.status;
  return status === 404 || status === 405;
}

function unwrapApiResponse(response, fallbackMessage) {
  const payload = response?.data;

  if (payload && typeof payload === "object" && Object.prototype.hasOwnProperty.call(payload, "success")) {
    if (!payload.success) {
      throw new Error(payload.message || fallbackMessage);
    }

    return {
      data: payload.data ?? null,
      message: payload.message || fallbackMessage,
      raw: payload,
    };
  }

  return {
    data: payload ?? null,
    message: fallbackMessage,
    raw: payload,
  };
}

function getErrorMessageFromResponse(error, fallbackMessage) {
  const serverMessage =
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.response?.data?.details;

  if (typeof serverMessage === "string" && serverMessage.trim()) {
    return serverMessage.trim();
  }

  if (error?.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  if (!error?.response) {
    return "Unable to reach the server. Check your connection and try again.";
  }

  return fallbackMessage;
}

async function postToFirstAvailableEndpoint(endpoints, payload, fallbackMessage) {
  let lastError;

  for (let index = 0; index < endpoints.length; index += 1) {
    const endpoint = endpoints[index];
    const isLast = index === endpoints.length - 1;

    try {
      const response = await api.post(endpoint, payload);
      return unwrapApiResponse(response, fallbackMessage);
    } catch (error) {
      lastError = error;
      if (!shouldTryNextEndpoint(error, isLast)) {
        break;
      }
    }
  }

  const message = getErrorMessageFromResponse(lastError, fallbackMessage);
  throw new Error(message);
}

export function submitContact(payload) {
  return postToFirstAvailableEndpoint(CONTACT_ENDPOINTS, payload, "Message sent successfully.");
}

export function subscribeToUpdates(payload) {
  return postToFirstAvailableEndpoint(SUBSCRIBE_ENDPOINTS, payload, "Subscription completed.");
}

export function getApiErrorMessage(error, fallbackMessage = "Something went wrong. Please try again.") {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return getErrorMessageFromResponse(error, fallbackMessage);
}
