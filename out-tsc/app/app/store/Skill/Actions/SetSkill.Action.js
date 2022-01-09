import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { SkillActionNames } from '../SkillActionNames';
export class SetSkillAction extends AbstractSkillStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = SkillActionNames.SET_SKILL;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetSkill.Action.js.map