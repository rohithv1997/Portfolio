import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { ProjectActionNames } from '../ProjectActionNames';
export class SetProjectAction extends AbstractProjectStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = ProjectActionNames.SET_PROJECT;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetProject.Action.js.map