// Google Analytics 4 utility

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function gtag(...args: any[]) {
  if (typeof window !== "undefined") {
    const gtagFn = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtagFn) {
      gtagFn(...args);
    }
  }
}

export function pageview(url: string) {
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}

export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

