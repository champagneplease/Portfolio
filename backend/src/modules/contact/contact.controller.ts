import { Body, Controller, Post, Req } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { Request } from 'express';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  async submitContact(
    @Body() createContactDto: CreateContactDto,
    @Req() req: Request,
  ) {
    const ip = req.ip || req.socket?.remoteAddress;
    return this.contactService.create(createContactDto, ip);
  }
}
