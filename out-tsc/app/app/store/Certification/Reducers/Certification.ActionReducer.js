import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { CertificationReducer } from './Certification.Reducer';
export class CertificationActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new CertificationReducer();
    }
}
//# sourceMappingURL=Certification.ActionReducer.js.map