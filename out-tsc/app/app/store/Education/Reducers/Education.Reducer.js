import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractEducationReducer } from '../AbstractEducation.Reducer';
import { EducationActionNames } from '../EducationActionNames';
export class EducationReducer extends AbstractEducationReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new EducationDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case EducationActionNames.GET_EDUCATION:
            case EducationActionNames.SET_EDUCATION:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Education.Reducer.js.map