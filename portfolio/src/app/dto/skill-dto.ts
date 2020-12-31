import { IDto } from './IDto';
import { SkillDetailDTO } from './skill-detail-dto';

export class SkillDTO implements IDto {
  public firstline!: SkillDetailDTO[];
  public secondline!: SkillDetailDTO[];
  public thirdline!: SkillDetailDTO[];
  public fourthline!: SkillDetailDTO[];
}
