"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-brand-teal bg-moss-50 p-8">
        <CheckCircle2 className="text-brand-teal" size={28} />
        <h3 className="font-display text-xl">Message sent.</h3>
        <p className="text-ink-soft">
          Thank you for reaching out — our team will get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm underline underline-offset-4 text-brand-teal mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" type="text" required placeholder="Jane Researcher" />
        <Field label="Email address" name="email" type="email" required placeholder="jane@university.edu" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium text-ink-soft">
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-brand-teal transition-colors"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option>Software Solutions</option>
          <option>Conference Management</option>
          <option>Collaboration &amp; Visa Consultancy</option>
          <option>Internship Services</option>
          <option>Author Services</option>
          <option>Patent Drafting Services</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you're working on."
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-brand-teal transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-clay">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold text-white px-8 py-3.5 font-medium hover:bg-brand-gold-hover transition-colors disabled:opacity-60 mt-2 w-fit"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink-soft">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-brand-teal transition-colors"
      />
    </div>
  );
}
