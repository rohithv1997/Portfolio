import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { CertificationActionNames } from '../CertificationActionNames';
export class GetCertificationAction extends AbstractCertificationStoreAction {
    constructor() {
        super();
        this.type = CertificationActionNames.GET_CERTIFICATION;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetCertification.Action.js.map