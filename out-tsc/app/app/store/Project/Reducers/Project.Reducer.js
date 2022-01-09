import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractProjectReducer } from '../AbstractProject.Reducer';
import { ProjectActionNames } from '../ProjectActionNames';
export class ProjectReducer extends AbstractProjectReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new ProjectDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case ProjectActionNames.GET_PROJECT:
            case ProjectActionNames.SET_PROJECT:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Project.Reducer.js.map