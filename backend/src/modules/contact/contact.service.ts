import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateContactDto, ipAddress?: string) {
    // Spam protection check (honeypot)
    if (dto.honeypot && dto.honeypot.trim().length > 0) {
      this.logger.warn(`Spam bot submission trapped via honeypot from IP: ${ipAddress}`);
      // Return normal success response to avoid giving feedback to spam bots
      return {
        received: true,
        message: 'Mensaje recibido correctamente. Me pondré en contacto a la brevedad.',
      };
    }

    try {
      const saved = await this.prisma.contactMessage.create({
        data: {
          name: dto.name.trim(),
          email: dto.email.trim().toLowerCase(),
          subject: dto.subject.trim(),
          message: dto.message.trim(),
          ipAddress: ipAddress || null,
        },
      });

      this.logger.log(`New contact message received from ${saved.email} (ID: ${saved.id})`);

      // Asynchronously trigger email notification without blocking API response
      this.sendEmailNotification(dto, saved.id).catch((err) => {
        this.logger.error('Background email dispatch error:', (err as Error)?.message);
      });

      return {
        received: true,
        id: saved.id,
        message: '¡Gracias por tu mensaje! Me pondré en contacto pronto.',
      };
    } catch (error) {
      this.logger.error(
        `Database insertion failed for contact message from ${dto.email}. Logging message content for manual review:`,
        JSON.stringify({ dto, ipAddress }),
      );

      // Return a positive acknowledgment so the user gets confirmation
      return {
        received: true,
        message: '¡Gracias por contactarme! Tu mensaje ha sido registrado.',
      };
    }
  }

  /**
   * Dispatches an email notification to the portfolio owner (e.g. via Resend API).
   * Safe and non-blocking: if RESEND_API_KEY is not configured, it simply logs and skips.
   */
  private async sendEmailNotification(dto: CreateContactDto, id: string) {
    const resendApiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'nachomirnd@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Nacho Portfolio <onboarding@resend.dev>';

    if (!resendApiKey) {
      this.logger.log(
        'Email notification skipped: RESEND_API_KEY not configured in environment. Message safely stored in PostgreSQL.',
      );
      return;
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [destinationEmail],
          reply_to: dto.email,
          subject: `[Portfolio] Nuevo mensaje de ${dto.name}: "${dto.subject}"`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 8px; background-color: #ffffff;">
              <div style="border-bottom: 2px solid #e0234e; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #18181b; margin: 0; font-size: 20px;">Nuevo mensaje de contacto recibido</h2>
                <span style="font-size: 11px; font-family: monospace; color: #71717a;">ID: ${id}</span>
              </div>
              
              <div style="margin-bottom: 16px;">
                <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; font-weight: 600; text-transform: uppercase;">Remitente</p>
                <p style="margin: 0; color: #18181b; font-size: 15px; font-weight: 600;">${dto.name} &lt;<a href="mailto:${dto.email}" style="color: #e0234e; text-decoration: none;">${dto.email}</a>&gt;</p>
              </div>

              <div style="margin-bottom: 16px;">
                <p style="margin: 0 0 4px 0; color: #71717a; font-size: 12px; font-weight: 600; text-transform: uppercase;">Asunto</p>
                <p style="margin: 0; color: #18181b; font-size: 15px; font-weight: 500;">${dto.subject}</p>
              </div>

              <div style="margin-bottom: 24px; padding: 16px; background-color: #f4f4f5; border-radius: 6px;">
                <p style="margin: 0 0 6px 0; color: #71717a; font-size: 12px; font-weight: 600; text-transform: uppercase;">Mensaje</p>
                <p style="margin: 0; color: #27272a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${dto.message}</p>
              </div>

              <div style="text-align: center; padding-top: 14px; border-top: 1px solid #e4e4e7;">
                <a href="mailto:${dto.email}?subject=Re: ${encodeURIComponent(dto.subject)}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">
                  Responder a ${dto.name}
                </a>
              </div>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        this.logger.warn(`Resend API error (${response.status}): ${errorText}`);
      } else {
        this.logger.log(`✅ Email notification successfully sent to ${destinationEmail}`);
      }
    } catch (err) {
      this.logger.error('Failed to dispatch email notification:', (err as Error)?.message);
    }
  }
}

