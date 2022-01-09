import { ButtonDTO } from './button-dto';
import { IDto } from './IDto';

export class IntroDTO implements IDto {
  public fullName!: string;
  public shortDescription!: string;
  public buttons!: ButtonDTO[];
}
