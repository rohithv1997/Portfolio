import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractCertificationStoreAction } from './AbstractCertification.StoreAction';
import { ICertificationState } from './ICertification.State';

export abstract class AbstractCertificationReducer extends AbstractAppReducer<
  CertificationDTO,
  ICertificationState,
  AbstractCertificationStoreAction
> {}
