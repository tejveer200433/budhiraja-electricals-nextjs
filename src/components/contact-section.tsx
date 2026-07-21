"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import { SITE_CONTACT } from "@/lib/site";

const SERVICES = [
  "Electrical Substations",
  "Power Distribution",
  "Industrial Electrification",
  "Stadium Lighting",
  "Smart Security Solutions",
  "Automation & Controls",
  "Bus Trunking Systems",
  "Electrical Panels",
  "Access Control",
  "Parking Solutions",
  "Landscape Lighting",
  "Maintenance Services",
];

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ tone: "success" | "error"; message: string; fallback?: boolean } | null>(null);
  const [fallbackHref, setFallbackHref] = useState<string>(SITE_CONTACT.whatsappHref);
  const openedAt = useRef(Date.now());

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "")) return;
    if (Date.now() - openedAt.current < 2500) {
      setNotice({ tone: "error", message: "Please review the form and try again." });
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const callback = String(data.get("callback") ?? "").trim();

    if (!name || !email || !phone || !message || !service || !location) {
      setNotice({ tone: "error", message: "Please complete all required fields." });
      return;
    }
    const lastSubmission = Number(window.localStorage.getItem("be-last-enquiry") || 0);
    if (Date.now() - lastSubmission < 60000) {
      setNotice({ tone: "error", message: "Please wait a minute before sending another enquiry." });
      return;
    }

    setSubmitting(true);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey || /your_|placeholder/i.test(accessKey)) {
        throw new Error("Web3Forms access key is not configured.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project enquiry from ${name}`,
          from_name: "Budhiraja Electricals Website",
          name,
          email,
          Phone: phone,
          Company: company || "Not specified",
          "Service Required": service,
          "Project Location": location,
          "Estimated Budget": budget || "Not specified",
          "Preferred Callback": callback || "No preference",
          message,
          botcheck: false,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to send enquiry.");
      }
      window.localStorage.setItem("be-last-enquiry", String(Date.now()));
      setNotice({ tone: "success", message: "Thank you. Our team will contact you shortly." });
      setFallbackHref(SITE_CONTACT.whatsappHref);
      trackEvent("contact_submission", { service, project_location: location, budget: budget || "not_specified" });
      form.reset();
      openedAt.current = Date.now();
    } catch (error) {
      console.error("Enquiry submission failed", error);
      const configurationMissing = error instanceof Error && error.message === "Web3Forms access key is not configured.";
      const fallbackMessage = [
        "Hello Budhiraja Electricals, I would like to discuss a project.",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company || "Not specified"}`,
        `Service: ${service}`,
        `Location: ${location}`,
        `Budget: ${budget || "Not specified"}`,
        `Preferred callback: ${callback || "No preference"}`,
        `Project brief: ${message}`,
      ].join("\n");
      setFallbackHref(`${SITE_CONTACT.whatsappHref}?text=${encodeURIComponent(fallbackMessage)}`);
      setNotice({
        tone: "error",
        fallback: true,
        message: configurationMissing
          ? "Web3Forms setup is incomplete. Add the access key to .env.local and restart the development server."
          : "Email delivery is temporarily unavailable. You can send the same enquiry securely through WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[color:var(--color-surface-alt)] py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <div className="eyebrow mb-5">Start a conversation</div>
          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Tell us what you<br />need to build.
          </h1>
          <p className="mt-6 max-w-md text-[color:var(--color-mute)]">
            Share the project scope and location. The team will respond with the right technical contact.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`tel:${SITE_CONTACT.phoneHref}`} onClick={() => trackEvent("phone_click", { location: "contact_page" })} className="btn-primary"><Phone className="h-4 w-4" /> Call {SITE_CONTACT.phoneDisplay}</a>
            <a href={SITE_CONTACT.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "contact_page" })} className="btn-ghost"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
          <address className="mt-10 space-y-5 not-italic">
            <ContactItem icon={MapPin} title="Head office">{SITE_CONTACT.headOffice}</ContactItem>
            <ContactItem icon={Building2} title="Branch office">{SITE_CONTACT.branchOffice}</ContactItem>
            <ContactItem icon={Mail} title="Email"><a href={`mailto:${SITE_CONTACT.email}`} onClick={() => trackEvent("email_click", { location: "contact_page" })} className="text-[color:var(--color-brand)]">{SITE_CONTACT.email}</a></ContactItem>
          </address>
          <a href="https://www.google.com/maps/search/?api=1&query=D-112%2C%20Panchsheel%20Enclave%2C%20New%20Delhi%20110017" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[color:var(--color-brand)]">
            <MapPin className="h-4 w-4" /> Open head office in Google Maps
          </a>
        </div>

        <form onSubmit={onSubmit} className="h-fit rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-10">
          <div className="sr-only" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
          {notice && <div role="alert" className={`mb-6 rounded-xl border p-4 text-sm ${notice.tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : notice.fallback ? "border-amber-200 bg-amber-50 text-amber-950" : "border-red-200 bg-red-50 text-red-900"}`}><div>{notice.message}</div>{notice.fallback && <a href={fallbackHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "form_fallback" })} className="btn-primary mt-3"><MessageCircle className="h-4 w-4" />Send this enquiry on WhatsApp</a>}</div>}
          <div className="grid gap-5 sm:grid-cols-2">
            <ContactField name="name" label="Name" required />
            <ContactField name="email" label="Email" type="email" required />
            <ContactField name="phone" label="Phone" type="tel" required />
            <ContactField name="company" label="Company / organisation" />
            <label className="block"><span className="contact-label">Service required *</span><select name="service" required className="contact-control"><option value="">Select a capability</option>{SERVICES.map((service) => <option key={service}>{service}</option>)}</select></label>
            <ContactField name="location" label="Project location" required />
            <label className="block"><span className="contact-label">Estimated budget</span><select name="budget" className="contact-control"><option value="">Select range</option><option>Below ₹25 lakh</option><option>₹25 lakh - ₹1 crore</option><option>₹1 crore - ₹5 crore</option><option>Above ₹5 crore</option><option>To be determined</option></select></label>
            <label className="block"><span className="contact-label">Preferred callback</span><select name="callback" className="contact-control"><option value="">No preference</option><option>9 AM - 12 PM</option><option>12 PM - 3 PM</option><option>3 PM - 6 PM</option></select></label>
          </div>
          <label className="mt-5 block"><span className="contact-label">Project brief *</span><textarea name="message" rows={5} maxLength={4200} required className="contact-control resize-y" placeholder="Scope, capacity, timeline and any tender details" /></label>
          <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-[color:var(--color-mute)]"><input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[color:var(--color-brand)]" /><span>I agree that Budhiraja Electricals may use these details to respond to my enquiry.</span></label>
          <button type="submit" disabled={submitting} className="mt-7 btn-primary w-full disabled:opacity-60 sm:w-auto">
            {submitting ? "Sending…" : <>Send Project Enquiry <ArrowUpRight className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: ReactNode }) {
  return <div className="flex gap-4"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-brand)]" /><div><strong className="block font-display">{title}</strong><span className="text-sm text-[color:var(--color-mute)]">{children}</span></div></div>;
}

function ContactField({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return <label className="block"><span className="contact-label">{label}{required ? " *" : ""}</span><input name={name} type={type} required={required} maxLength={type === "email" ? 255 : 150} className="contact-control" /></label>;
}
