import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { ProjectReducer } from './Project.Reducer';
export class ProjectActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new ProjectReducer();
    }
}
//# sourceMappingURL=Project.ActionReducer.js.map