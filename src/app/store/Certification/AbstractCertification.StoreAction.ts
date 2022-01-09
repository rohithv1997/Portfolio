import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { ICertificationState } from './ICertification.State';

export abstract class AbstractCertificationStoreAction extends AbstractAppStoreAction<
  CertificationDTO,
  ICertificationState
> {}
