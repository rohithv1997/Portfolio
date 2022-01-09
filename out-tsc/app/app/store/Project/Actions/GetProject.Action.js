import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { ProjectActionNames } from '../ProjectActionNames';
export class GetProjectAction extends AbstractProjectStoreAction {
    constructor() {
        super();
        this.type = ProjectActionNames.GET_PROJECT;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetProject.Action.js.map