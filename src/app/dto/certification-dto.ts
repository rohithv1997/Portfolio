import { CertificationDetailDTO } from './certification-detail-dto';
import { IDto } from './IDto';

export class CertificationDTO implements IDto {
  public courseCertifications!: CertificationDetailDTO[];
  public examCertifications!: CertificationDetailDTO[];
}
