import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { CertificationActionNames } from '../CertificationActionNames';
import { ICertificationState } from '../ICertification.State';
import { CertificationDTO } from 'src/app/dto/certification-dto';

export class SetCertificationAction extends AbstractCertificationStoreAction {
  readonly type = CertificationActionNames.SET_CERTIFICATION;

  constructor(private payload: CertificationDTO) {
    super();
  }

  execute(state: ICertificationState): ICertificationState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
