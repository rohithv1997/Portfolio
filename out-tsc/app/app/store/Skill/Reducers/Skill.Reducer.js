import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractSkillReducer } from '../AbstractSkill.Reducer';
import { SkillActionNames } from '../SkillActionNames';
export class SkillReducer extends AbstractSkillReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new SkillDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case SkillActionNames.GET_SKILL:
            case SkillActionNames.SET_SKILL:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Skill.Reducer.js.map