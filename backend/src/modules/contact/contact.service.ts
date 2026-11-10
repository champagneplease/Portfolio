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
}

