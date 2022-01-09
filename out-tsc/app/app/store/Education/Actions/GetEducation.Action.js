import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { EducationActionNames } from '../EducationActionNames';
export class GetEducationAction extends AbstractEducationStoreAction {
    constructor() {
        super();
        this.type = EducationActionNames.GET_EDUCATION;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetEducation.Action.js.map