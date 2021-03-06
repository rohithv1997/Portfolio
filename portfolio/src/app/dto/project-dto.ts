import { IDto } from './IDto';
import { ProjectDetailDTO } from './project-detail-dto';

export class ProjectDTO implements IDto {
  public items!: ProjectDetailDTO[];
}
