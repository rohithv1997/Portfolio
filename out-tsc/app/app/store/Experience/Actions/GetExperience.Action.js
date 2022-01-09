import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { ExperienceActionNames } from '../ExperienceActionNames';
export class GetExperienceAction extends AbstractExperienceStoreAction {
    constructor() {
        super();
        this.type = ExperienceActionNames.GET_EXPERIENCE;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetExperience.Action.js.map