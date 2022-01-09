import { IDto } from './IDto';
import { UrlDTO } from './url-dto';

export class CertificationDetailDTO implements IDto {
  public linkDetail!: UrlDTO;
  public instructor!: string;
  public website!: string;
}
