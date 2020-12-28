import { IDto } from './IDto';

export class SingleSkillDTO implements IDto {
  public title!: string;
  public percentage!: number;
}
