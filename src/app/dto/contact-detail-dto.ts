import { IDto } from './IDto';

export class ContactDetailDTO implements IDto {
  public title!: string;
  public value!: string;
}
