import { CompanyExperienceDTO } from './company-experience-dto';
import { IDto } from './IDto';

export class ExperienceDTO implements IDto {
  public experienceTitle!: string;
  public jobs!: CompanyExperienceDTO[];
}
