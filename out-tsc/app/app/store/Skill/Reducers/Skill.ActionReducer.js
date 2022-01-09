import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { SkillReducer } from './Skill.Reducer';
export class SkillActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new SkillReducer();
    }
}
//# sourceMappingURL=Skill.ActionReducer.js.map