export type AnalyticsEvent =
  | "contact_submission"
  | "email_click"
  | "phone_click"
  | "profile_download"
  | "project_view"
  | "service_interest"
  | "start_project_click"
  | "whatsapp_click";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}
