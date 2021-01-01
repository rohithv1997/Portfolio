import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { CertificationActionNames } from '../CertificationActionNames';
import { ICertificationState } from '../ICertification.State';

export class GetCertificationAction extends AbstractCertificationStoreAction {
  readonly type = CertificationActionNames.GET_CERTIFICATION;

  constructor() {
    super();
  }

  execute(state: ICertificationState): ICertificationState {
    return {
      ...state,
    };
  }
}
