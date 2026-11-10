import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(35, 'El nombre no puede superar los 35 caracteres.'),
  email: z
    .string()
    .trim()
    .min(1, 'El correo electrónico es obligatorio.')
    .email('Ingresa un correo electrónico válido (ej. usuario@dominio.com).'),
  subject: z
    .string()
    .trim()
    .min(3, 'El asunto debe tener al menos 3 caracteres.')
    .max(100, 'El asunto no puede superar los 100 caracteres.'),
  message: z
    .string()
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(500, 'El mensaje no puede superar los 500 caracteres.'),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
