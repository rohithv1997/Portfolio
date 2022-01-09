import { AbstractCertificationStoreAction } from '../AbstractCertification.StoreAction';
import { CertificationActionNames } from '../CertificationActionNames';
export class SetCertificationAction extends AbstractCertificationStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = CertificationActionNames.SET_CERTIFICATION;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetCertification.Action.js.map