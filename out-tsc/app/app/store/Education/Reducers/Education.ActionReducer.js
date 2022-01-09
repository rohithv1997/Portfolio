import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { EducationReducer } from './Education.Reducer';
export class EducationActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new EducationReducer();
    }
}
//# sourceMappingURL=Education.ActionReducer.js.map