import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectsService, ProjectEntity } from './projects.service';
import { GetProjectsFilterDto } from './dto/get-projects-filter.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects(@Query() filter: GetProjectsFilterDto): Promise<ProjectEntity[]> {
    const featuredOnly =
      filter.featured !== undefined ? filter.featured === 'true' : undefined;
    return this.projectsService.findAll(featuredOnly);
  }

  @Get(':slug')
  async getProjectBySlug(@Param('slug') slug: string): Promise<ProjectEntity> {
    return this.projectsService.findBySlug(slug);
  }
}
