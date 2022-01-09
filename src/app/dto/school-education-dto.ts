import { IDto } from './IDto';

export class SchoolEducationDTO implements IDto {
  public school!: string;
  public period!: string;
  public educationTitle!: string;
  public category!: string;
  public lines!: string[];
}
