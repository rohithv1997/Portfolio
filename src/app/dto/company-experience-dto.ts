import { IDto } from './IDto';

export class CompanyExperienceDTO implements IDto {
  public company!: string;
  public period!: string;
  public jobTitle!: string;
  public description!: string;
  public skills!: string[];
}
