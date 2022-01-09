import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { EducationActionNames } from '../EducationActionNames';
export class SetEducationAction extends AbstractEducationStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = EducationActionNames.SET_EDUCATION;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetEducation.Action.js.map