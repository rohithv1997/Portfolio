import { AbstractExperienceReducer } from '../AbstractExperience.Reducer';
import { ExperienceActionNames } from '../ExperienceActionNames';
import { ExperienceDTO } from 'src/app/dto/experience-dto';
export class ExperienceReducer extends AbstractExperienceReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new ExperienceDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case ExperienceActionNames.GET_EXPERIENCE:
            case ExperienceActionNames.SET_EXPERIENCE:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Experience.Reducer.js.map