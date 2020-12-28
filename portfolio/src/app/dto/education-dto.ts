import { IDto } from './IDto';
import { SchoolEducationDTO } from './school-education-dto';

export class EducationDTO implements IDto {
  public educationTitle!: string;
  public schools!: SchoolEducationDTO[];
}
