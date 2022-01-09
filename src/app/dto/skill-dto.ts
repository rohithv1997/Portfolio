import { IDto } from './IDto';
import { SkillDetailDTO } from './skill-detail-dto';

export class SkillDTO implements IDto {
  public skills!: SkillDetailDTO[];
}
