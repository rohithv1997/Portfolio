import { IDto } from './IDto';
import { UrlDTO } from './url-dto';

export class ProjectDetailDTO implements IDto {
  public title!: string;
  public text!: string[];
  public links!: UrlDTO[];
}
