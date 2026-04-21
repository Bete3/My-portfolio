"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Failed to send message. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Message sent successfully. I will reply soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-4 py-16 md:px-8">
      <ScrollReveal className="grid w-full max-w-5xl gap-8 md:grid-cols-[1fr_1.2fr]">
        <section>
          <p className="section-tag">Contact</p>
          <h1 className="mb-3 mt-2 text-5xl font-semibold text-slate-900 md:text-7xl">Let&apos;s Work Together</h1>
          <p className="mb-6 text-lg text-slate-600 md:text-2xl">
            Let&apos;s collaborate on digital products that are modern, reliable, and impactful. I&apos;m open to
            freelance projects, internships, and long-term product roles where design quality and frontend craft matter.
          </p>

          <div className="space-y-3">
            <div className="light-panel flex items-center gap-3 p-3">
              <Mail size={18} className="text-pink-500" />
              <span className="text-sm text-slate-700">betelyehuala@gmail.com</span>
            </div>
            <div className="light-panel flex items-center gap-3 p-3">
              <Phone size={18} className="text-pink-500" />
              <span className="text-sm text-slate-700">+251964011814</span>
            </div>
            <div className="light-panel flex items-center gap-3 p-3">
              <MapPin size={18} className="text-pink-500" />
              <span className="text-sm text-slate-700">Adama, Ethiopia</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900">Send Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-11 rounded-xl border-slate-300 bg-white text-slate-700 placeholder:text-slate-400"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11 rounded-xl border-slate-300 bg-white text-slate-700 placeholder:text-slate-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              suppressHydrationWarning
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-pink-400"
            />
            {feedback ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-emerald-600" : "text-rose-500"
                }`}
              >
                {feedback}
              </p>
            ) : null}
            <Button
              type="submit"
              disabled={status === "sending"}
              className="h-11 w-full rounded-xl bg-pink-600 text-white hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </section>
      </ScrollReveal>
    </section>
  );
}
