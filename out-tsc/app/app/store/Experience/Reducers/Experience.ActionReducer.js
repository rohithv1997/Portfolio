import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { ExperienceReducer } from './Experience.Reducer';
export class ExperienceActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new ExperienceReducer();
    }
}
//# sourceMappingURL=Experience.ActionReducer.js.map