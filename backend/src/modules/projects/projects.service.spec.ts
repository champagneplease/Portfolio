import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: PrismaService,
          useValue: {
            project: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return fallback projects when database query throws', async () => {
    jest.spyOn(prisma.project, 'findMany').mockRejectedValue(new Error('DB unreachable'));
    const projects = await service.findAll();
    expect(projects).toBeDefined();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].slug).toBe('burger-sosa');
  });

  it('should filter featured projects correctly', async () => {
    jest.spyOn(prisma.project, 'findMany').mockRejectedValue(new Error('DB unreachable'));
    const featuredProjects = await service.findAll(true);
    expect(featuredProjects.length).toBe(1);
    expect(featuredProjects[0].slug).toBe('burger-sosa');
    expect(featuredProjects[0].featured).toBe(true);
  });

  it('should find project by slug', async () => {
    jest.spyOn(prisma.project, 'findUnique').mockRejectedValue(new Error('DB unreachable'));
    const project = await service.findBySlug('burger-sosa');
    expect(project).toBeDefined();
    expect(project.title).toBe('Burger Sosa');
  });

  it('should throw NotFoundException for unknown slug', async () => {
    jest.spyOn(prisma.project, 'findUnique').mockResolvedValue(null as any);
    await expect(service.findBySlug('non-existent')).rejects.toThrow();
  });
});

