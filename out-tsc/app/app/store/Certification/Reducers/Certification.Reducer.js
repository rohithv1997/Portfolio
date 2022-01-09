import { CertificationDTO } from 'src/app/dto/certification-dto';
import { AbstractCertificationReducer } from '../AbstractCertification.Reducer';
import { CertificationActionNames } from '../CertificationActionNames';
export class CertificationReducer extends AbstractCertificationReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new CertificationDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case CertificationActionNames.GET_CERTIFICATION:
            case CertificationActionNames.SET_CERTIFICATION:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Certification.Reducer.js.map