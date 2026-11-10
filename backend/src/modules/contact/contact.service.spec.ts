import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ContactService', () => {
  let service: ContactService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: PrismaService,
          useValue: {
            contactMessage: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should trap spam bot when honeypot field is populated without writing to DB', async () => {
    const createSpy = jest.spyOn(prisma.contactMessage, 'create');
    const response = await service.create({
      name: 'Spam Bot',
      email: 'bot@spam.com',
      subject: 'Buy crypto',
      message: 'Great offer for you',
      honeypot: 'http://spamsite.com',
    });

    expect(response.received).toBe(true);
    expect(createSpy).not.toHaveBeenCalled();
  });

  it('should persist valid contact message to database', async () => {
    const mockCreated = {
      id: 'msg-123',
      name: 'Recruiter User',
      email: 'recruiter@tech.com',
      subject: 'Junior Backend Opportunity',
      message: 'Hello Nacho, we liked your profile.',
      ipAddress: '192.168.1.1',
      createdAt: new Date(),
    };

    jest.spyOn(prisma.contactMessage, 'create').mockResolvedValue(mockCreated as any);

    const response = await service.create(
      {
        name: 'Recruiter User',
        email: 'recruiter@tech.com',
        subject: 'Junior Backend Opportunity',
        message: 'Hello Nacho, we liked your profile.',
      },
      '192.168.1.1',
    );

    expect(response.received).toBe(true);
    expect(response.id).toBe('msg-123');
    expect(prisma.contactMessage.create).toHaveBeenCalledWith({
      data: {
        name: 'Recruiter User',
        email: 'recruiter@tech.com',
        subject: 'Junior Backend Opportunity',
        message: 'Hello Nacho, we liked your profile.',
        ipAddress: '192.168.1.1',
      },
    });
  });

  it('should gracefully handle database error and confirm receipt for user safety', async () => {
    jest.spyOn(prisma.contactMessage, 'create').mockRejectedValue(new Error('DB unreachable'));

    const response = await service.create({
      name: 'Recruiter User',
      email: 'recruiter@tech.com',
      subject: 'Interview',
      message: 'Can we chat tomorrow?',
    });

    expect(response.received).toBe(true);
  });
});

