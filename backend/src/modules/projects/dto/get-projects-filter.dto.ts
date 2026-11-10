import { IsBooleanString, IsOptional } from 'class-validator';

export class GetProjectsFilterDto {
  @IsOptional()
  @IsBooleanString()
  featured?: string;
}

