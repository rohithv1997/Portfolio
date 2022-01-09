import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { SkillActionNames } from '../SkillActionNames';
export class GetSkillAction extends AbstractSkillStoreAction {
    constructor() {
        super();
        this.type = SkillActionNames.GET_SKILL;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetSkill.Action.js.map