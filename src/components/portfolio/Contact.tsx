"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { profile } from "@/data/profile";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SocialIcon } from "./SocialIcon";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type FieldName = "name" | "email" | "subject" | "message";
type FormState = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name is too short.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  else if (values.subject.trim().length < 3) errors.subject = "Subject is too short.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  return errors;
}

export function Contact() {
  const { toast } = useToast();
  const [values, setValues] = React.useState<FormState>(emptyForm);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (field: FieldName, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }));
    }
  };

  const blur = (field: FieldName) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as {
        ok: boolean;
        demo?: boolean;
        message?: string;
        error?: string;
        issues?: Record<string, string[] | undefined>;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        // Surface server-side field errors if present.
        if (data.issues) {
          setErrors({
            name: data.issues.name?.[0],
            email: data.issues.email?.[0],
            subject: data.issues.subject?.[0],
            message: data.issues.message?.[0],
          });
        }
        toast({
          title: "Submission failed",
          description: data.error ?? "Something went wrong. Please try again.",
          variant: "destructive",
        });
        return;
      }

      setStatus("success");
      setValues(emptyForm);
      setTouched({ name: false, email: false, subject: false, message: false });
      toast({
        title: "Message received (demo)",
        description:
          "Thanks! The demo endpoint logged your message. Connect an email provider to enable real delivery.",
      });
    } catch {
      setStatus("error");
      toast({
        title: "Network error",
        description: "Could not reach the server. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 scroll-mt-20"
      aria-label="Contact"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Let's work together"
          title={
            <>
              Have a project <span className="text-gradient">in mind?</span>
            </>
          }
          description="Tell me what you're building. I'm currently taking on new freelance and contract work, and happy to chat through ideas — no obligation."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Left: contact info + socials */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal direction="right">
              <GlassCard variant="strong" padding="lg" glow="violet" className="h-full">
                <p className="text-base sm:text-lg leading-relaxed text-foreground/90 text-pretty">
                  I usually reply within a day. Prefer email? Reach me directly:
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-5 group inline-flex items-center gap-3 rounded-xl glass-subtle glass-highlight px-4 py-3 text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)] text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </span>
                    <span className="text-gradient-cyan">{profile.email}</span>
                  </span>
                </a>

                <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Around the web
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {profile.socials.map((s) => (
                      <SocialIcon key={s.label} social={s} size="md" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <GlassCard variant="strong" padding="lg" className="relative">
                {/* Demo notice */}
                <div className="mb-5 flex items-start gap-2.5 rounded-xl glass-subtle border-white/10 px-4 py-3 text-xs text-muted-foreground">
                  <Info className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <p>
                    <span className="font-semibold text-foreground/90">Demo form.</span>{" "}
                    Submissions are validated and logged to the demo endpoint — no
                    email is actually sent. Wire up an email provider in{" "}
                    <code className="rounded bg-white/10 px-1 py-0.5 text-[11px]">
                      src/app/api/contact/route.ts
                    </code>{" "}
                    to enable real delivery.
                  </p>
                </div>

                <form noValidate onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      name="name"
                      value={values.name}
                      error={errors.name}
                      touched={touched.name}
                      onChange={(v) => update("name", v)}
                      onBlur={() => blur("name")}
                      autoComplete="name"
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      error={errors.email}
                      touched={touched.email}
                      onChange={(v) => update("email", v)}
                      onBlur={() => blur("email")}
                      autoComplete="email"
                      placeholder="you@email.com"
                    />
                  </div>
                  <Field
                    label="Subject"
                    name="subject"
                    value={values.subject}
                    error={errors.subject}
                    touched={touched.subject}
                    onChange={(v) => update("subject", v)}
                    onBlur={() => blur("subject")}
                    placeholder="What's this about?"
                  />
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    value={values.message}
                    error={errors.message}
                    touched={touched.message}
                    onChange={(v) => update("message", v)}
                    onBlur={() => blur("message")}
                    placeholder="Tell me a little about your project, timeline, and what success looks like…"
                  />

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={cn(
                        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground",
                        "bg-gradient-to-r from-[oklch(0.85_0.16_195)] via-[oklch(0.78_0.18_240)] to-[oklch(0.70_0.20_295)]",
                        "shadow-[0_8px_30px_-8px_oklch(0.55_0.18_240/0.7)]",
                        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_oklch(0.55_0.18_240/0.9)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        "disabled:opacity-60 disabled:pointer-events-none"
                      )}
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send message
                        </>
                      )}
                    </button>

                    {status === "success" && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300"
                      >
                        <CheckCircle2 className="h-4 w-4" /> Received — thanks!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-300"
                      >
                        <AlertCircle className="h-4 w-4" /> Something went wrong.
                      </motion.span>
                    )}
                  </div>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Field ---------- */

interface FieldProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  touched: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  value,
  error,
  touched,
  onChange,
  onBlur,
  type = "text",
  as = "input",
  rows,
  placeholder,
  autoComplete,
}: FieldProps) {
  const hasError = Boolean(touched && error);
  const sharedClass = cn(
    "w-full rounded-xl glass-subtle glass-highlight px-4 py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/40 hover:bg-white/[0.06]",
    hasError &&
      "ring-2 ring-rose-400/60 border-rose-400/40 focus:ring-rose-400/60 focus:border-rose-400/40"
  );

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={cn(sharedClass, "resize-y min-h-[120px]")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={sharedClass}
        />
      )}
      {hasError && (
        <motion.p
          id={`${name}-error`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-xs text-rose-300"
        >
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
