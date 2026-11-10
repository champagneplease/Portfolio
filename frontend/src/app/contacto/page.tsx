'use client';

import { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { submitContactMessage } from '@/lib/api';

export default function ContactPage() {
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
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Contacto
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          ¿Hablamos?
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
          Si estás buscando un desarrollador Backend Junior, querés intercambiar ideas sobre un proyecto o simplemente hablar de tecnología, podés contactarme.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Direct Channels */}
        <div className="md:col-span-5 space-y-4">
          <div className="border border-zinc-800 bg-zinc-950 p-6 rounded-lg space-y-4">
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Canales Directos
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="mailto:contactonachomiranda@gmail.com"
                className="flex items-center gap-3 p-3 rounded border border-zinc-800 bg-black hover:border-zinc-600 transition-colors text-zinc-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">Email</div>
                  <div className="font-mono text-xs text-white">contactonachomiranda@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/nacho-miranda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded border border-zinc-800 bg-black hover:border-zinc-600 transition-colors text-zinc-300 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">LinkedIn</div>
                  <div className="font-mono text-xs text-white">linkedin.com/in/nacho-miranda</div>
                </div>
              </a>

              <a
                href="https://github.com/champagneplease"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded border border-zinc-800 bg-black hover:border-zinc-600 transition-colors text-zinc-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">GitHub</div>
                  <div className="font-mono text-xs text-white">github.com/champagneplease</div>
                </div>
              </a>
            </div>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/40 p-4 rounded text-xs font-mono text-zinc-400">
            Formulario conectado a la API de NestJS con validación de DTOs y rate limiting (5 req / min).
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 border border-zinc-800 bg-zinc-950 p-6 sm:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot field for anti-spam */}
            <div style={{ display: 'none' }} aria-hidden="true">
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
              <label htmlFor="name" className="block text-xs font-mono text-zinc-300">
                Nombre <span className="text-zinc-500">*</span>
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
                className="w-full px-3.5 py-2.5 rounded bg-black border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono text-zinc-300">
                Email <span className="text-zinc-500">*</span>
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
                className="w-full px-3.5 py-2.5 rounded bg-black border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono text-zinc-300">
                Asunto <span className="text-zinc-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Propuesta laboral / Consulta técnica"
                className="w-full px-3.5 py-2.5 rounded bg-black border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-zinc-300">
                Mensaje <span className="text-zinc-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Contame brevemente sobre tu equipo, proyecto o propuesta..."
                className="w-full px-3.5 py-2.5 rounded bg-black border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-y min-h-[100px]"
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={`p-3 rounded text-xs font-mono flex items-center gap-2 border ${
                  status.type === 'success'
                    ? 'border-zinc-700 bg-zinc-900 text-zinc-200'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-400'
                }`}
                role="alert"
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded bg-white hover:bg-zinc-200 disabled:opacity-50 text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2"
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
  );
}
