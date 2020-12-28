import { IDto } from './IDto';
import { SingleSkillDTO } from './single-skill-dto';

export class SkillsDTO implements IDto {
  public firstline!: SingleSkillDTO[];
  public secondline!: SingleSkillDTO[];
  public thirdline!: SingleSkillDTO[];
  public fourthline!: SingleSkillDTO[];
}
