import { CompanyExperienceDTO } from './company-experience-dto';
import { IDto } from './IDto';

export class ExperienceDTO implements IDto {
  public jobs!: CompanyExperienceDTO[];
}
