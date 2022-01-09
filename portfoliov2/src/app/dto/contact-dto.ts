import { ContactDetailDTO } from './contact-detail-dto';
import { IDto } from './IDto';

export class ContactDTO implements IDto {
  public details!: ContactDetailDTO[];
}
