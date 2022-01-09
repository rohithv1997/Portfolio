import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractCertificationReducer } from '../AbstractCertification.Reducer';
import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { ICertificationState } from '../ICertification.State';
import { CertificationReducer } from './Certification.Reducer';

export class CertificationActionReducer extends AbstractAppActionReducer<
  CertificationDTO,
  ICertificationState,
  AbstractCertificationStoreAction,
  AbstractCertificationReducer
> {
  protected get reducer(): AbstractCertificationReducer {
    return new CertificationReducer();
  }
}
