"use client";

import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { submitContactMessage } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Por favor, completa todos los campos requeridos.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const response = await submitContactMessage(formData);
    setLoading(false);

    if (response.success) {
      setStatus({
        type: "success",
        message: response.message,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } else {
      setStatus({
        type: "error",
        message: response.message,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-12 animate-fade-in-up">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="space-y-3">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Contacto
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            ¿Hablamos?
          </h1>
          <p className="text-base sm:text-lg text-zinc-200 max-w-xl leading-relaxed">
            Si estás buscando un desarrollador Backend Junior, querés intercambiar
            ideas sobre un proyecto o simplemente hablar de tecnología, podés
            contactarme.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Direct Channels (Slides in from Left) */}
        <ScrollReveal direction="left" distance={36} className="md:col-span-5 space-y-5">
          <div className="border border-zinc-700 bg-[#0c0c0e] p-6 rounded-xl space-y-4 shadow-lg">
            <h2 className="text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
              Canales Directos
            </h2>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:nachomirnd@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-700 bg-black hover:border-zinc-500 transition-colors text-zinc-200 hover:text-white"
              >
                <Mail className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Email</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">
                    nachomirnd@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nachomirnd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-700 bg-black hover:border-zinc-500 transition-colors text-zinc-200 hover:text-white"
              >
                <LinkedinIcon className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="text-xs text-zinc-400 font-mono">
                    LinkedIn
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">
                    linkedin.com/in/nachomirnd
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/champagneplease"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-700 bg-black hover:border-zinc-500 transition-colors text-zinc-200 hover:text-white"
              >
                <GithubIcon className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="text-xs text-zinc-400 font-mono">GitHub</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-medium">
                    github.com/champagneplease
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="border border-zinc-800 bg-[#0c0c0e] p-4 rounded-lg text-xs font-mono text-zinc-300">
            Formulario conectado a la API de NestJS con validación de DTOs y
            rate limiting (5 req / min).
          </div>
        </ScrollReveal>

        {/* Contact Form (Slides in from Right) */}
        <ScrollReveal direction="right" distance={36} className="md:col-span-7 border border-zinc-700 bg-[#0c0c0e] p-6 sm:p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot field for anti-spam */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label htmlFor="hp-field">Honeypot</label>
              <input
                id="hp-field"
                name="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-mono text-zinc-200 font-semibold"
              >
                Nombre <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre o empresa"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-mono text-zinc-200 font-semibold"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block text-xs font-mono text-zinc-200 font-semibold"
              >
                Asunto <span className="text-red-400">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Propuesta laboral / Consulta técnica"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-xs font-mono text-zinc-200 font-semibold"
              >
                Mensaje <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Contame brevemente sobre tu equipo, proyecto o propuesta..."
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors resize-y min-h-[110px]"
              />
            </div>

            {status.type !== "idle" && (
              <div
                className={`p-3.5 rounded-lg text-xs font-mono flex items-center gap-2 border ${
                  status.type === "success"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                    : "border-red-500/40 bg-red-500/10 text-red-300"
                }`}
                role="alert"
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 py-3 text-sm font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
