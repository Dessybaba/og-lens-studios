"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Client-side contact form. It validates input and, on success, opens the
 * visitor's email client with a pre-filled message via a mailto: link.
 *
 * To send messages directly from the site instead, replace `handleSubmit`
 * with a call to a Next.js Route Handler (e.g. app/api/contact/route.ts)
 * wired to an email service such as Resend or SendGrid.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (message.length < 10) {
      next.message = "Tell us a little more about your session (10+ characters).";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const subject = encodeURIComponent(
      `New enquiry from ${data.get("name")} — OG Lens Studios`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${
        data.get("service") || "Not specified"
      }\n\n${data.get("message")}`
    );

    window.location.href = `mailto:gbengaoluwafemi001@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full border-b border-hairline bg-transparent py-2 font-sans text-ink outline-none transition-colors focus:border-gold"
        />
        {errors.name && (
          <p id="name-error" className="mt-2 font-sans text-xs text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2 w-full border-b border-hairline bg-transparent py-2 font-sans text-ink outline-none transition-colors focus:border-gold"
        />
        {errors.email && (
          <p id="email-error" className="mt-2 font-sans text-xs text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="eyebrow">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full border-b border-hairline bg-transparent py-2 font-sans text-ink outline-none transition-colors focus:border-gold"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Wedding</option>
          <option>Portrait</option>
          <option>Family</option>
          <option>Lifestyle</option>
          <option>Editorial</option>
          <option>Graduation</option>
          <option>Brand Photography</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-none border-b border-hairline bg-transparent py-2 font-sans text-ink outline-none transition-colors focus:border-gold"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 font-sans text-xs text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "success" && (
        <p role="status" className="font-sans text-sm text-gold">
          Your email client should now be open with your message ready to send.
        </p>
      )}
    </form>
  );
}
