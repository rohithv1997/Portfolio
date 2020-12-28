import { IDto } from './IDto';

export class UrlDTO implements IDto {
  public title!: string;
  public link!: string;
}
