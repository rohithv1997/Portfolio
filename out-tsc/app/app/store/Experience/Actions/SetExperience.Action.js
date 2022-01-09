import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { ExperienceActionNames } from '../ExperienceActionNames';
export class SetExperienceAction extends AbstractExperienceStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = ExperienceActionNames.SET_EXPERIENCE;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetExperience.Action.js.map