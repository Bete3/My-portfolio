"use client";

import { FormEvent, useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Mail, MapPin, Phone } from "lucide-react";

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
    <GlassCard>
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <section>
          <h1 className="mb-3 text-3xl font-semibold text-cyan-300 md:text-4xl">Contact Me</h1>
          <p className="mb-6 text-slate-400">
            Let&apos;s collaborate on products that are modern, reliable, and impactful.
          </p>

          <div className="space-y-3">
            <div className="card-cyan-glow flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <Mail size={18} className="text-cyan-300" />
              <span className="text-sm text-slate-200">betelyehuala@gmail.com</span>
            </div>
            <div className="card-cyan-glow flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <Phone size={18} className="text-cyan-300" />
              <span className="text-sm text-slate-200">+251964011814</span>
            </div>
            <div className="card-cyan-glow flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <MapPin size={18} className="text-cyan-300" />
              <span className="text-sm text-slate-200">Adama, Ethiopia</span>
            </div>
          </div>
        </section>

        <section className="card-cyan-glow rounded-2xl border border-white/10 bg-slate-900/55 p-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
            {feedback ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {feedback}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-cyan-glow w-full rounded-xl border border-cyan-300/35 bg-slate-900/60 px-4 py-3 font-semibold transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </GlassCard>
  );
}
