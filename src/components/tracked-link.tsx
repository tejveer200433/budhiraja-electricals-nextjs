"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  eventName: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean | undefined>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  ariaLabel?: string;
};

export function TrackedLink({ href, eventName, eventParams, children, className, target, rel, download, ariaLabel }: TrackedLinkProps) {
  const onClick = () => trackEvent(eventName, eventParams);
  const isExternal = /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#") || download;

  if (isExternal) {
    return <a href={href} onClick={onClick} className={className} target={target} rel={rel} download={download} aria-label={ariaLabel}>{children}</a>;
  }

  return <Link href={href} onClick={onClick} className={className} target={target} rel={rel} aria-label={ariaLabel}>{children}</Link>;
}
