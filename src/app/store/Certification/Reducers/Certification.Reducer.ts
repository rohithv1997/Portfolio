import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractCertificationReducer } from '../AbstractCertification.Reducer';
import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { ICertificationState } from '../ICertification.State';
import { CertificationActionNames } from '../CertificationActionNames';

export class CertificationReducer extends AbstractCertificationReducer {
  protected initialState: ICertificationState = {
    dto: new CertificationDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractCertificationStoreAction
  ): ICertificationState {
    switch (action.type) {
      case CertificationActionNames.GET_CERTIFICATION:
      case CertificationActionNames.SET_CERTIFICATION:
        return action.execute(state);
      default:
        return state;
    }
  }
}
