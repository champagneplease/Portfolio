'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { submitContactMessage } from '@/lib/api';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const response = await submitContactMessage(formData);
    setLoading(false);

    if (response.success) {
      setStatus({
        type: 'success',
        message: response.message,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } else {
      setStatus({
        type: 'error',
        message: response.message,
      });
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 border-t border-[#161c2b] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            09 / Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            ¿Hablamos?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Si estás buscando un desarrollador Backend Junior, querés intercambiar ideas sobre un proyecto o simplemente hablar de tecnología, podés contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-[#0d121c] border border-[#1b2336] p-6 space-y-4">
              <h3 className="text-sm font-mono font-semibold text-slate-200 uppercase tracking-wide">
                Canales directos
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:contactonachomiranda@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#111726] border border-[#1b253b] hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email</div>
                    <div className="font-mono text-xs text-slate-200 group-hover:text-emerald-400">
                      contactonachomiranda@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/nacho-miranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#111726] border border-[#1b253b] hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn</div>
                    <div className="font-mono text-xs text-slate-200 group-hover:text-cyan-400">
                      linkedin.com/in/nacho-miranda
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/champagneplease"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#111726] border border-[#1b253b] hover:border-slate-400 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded bg-slate-500/10 text-slate-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub</div>
                    <div className="font-mono text-xs text-slate-200 group-hover:text-slate-100">
                      github.com/champagneplease
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#090c13] border border-[#161f30] text-xs font-mono text-slate-400">
              <span className="text-emerald-400">●</span> Backend API con NestJS y rate limiting activo para protección de endpoints.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0d121c] border border-[#1b2336] rounded-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Spam Honeypot (hidden from sighted users and screen readers) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="form-honeypot">Dejar vacío</label>
                <input
                  type="text"
                  id="form-honeypot"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Grid 2 cols: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                    Nombre <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre o empresa"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b12] border border-[#1d263b] text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                    Email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b12] border border-[#1d263b] text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                  Asunto <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Oportunidad laboral / Consulta técnica"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b12] border border-[#1d263b] text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                  Mensaje <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contame en qué puedo ayudarte o qué rol tenés en mente..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080b12] border border-[#1d263b] text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-y min-h-[100px]"
                />
              </div>

              {/* Status Alert */}
              {status.type !== 'idle' && (
                <div
                  className={`p-3.5 rounded-lg text-xs font-mono flex items-center gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}
                  role="alert"
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15"
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
          </div>
        </div>
      </div>
    </section>
  );
}
