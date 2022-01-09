import { IDto } from './IDto';

export class SkillDetailDTO implements IDto {
  public title!: string;
  public percentage!: number;
}
