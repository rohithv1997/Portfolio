import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { SkillActionNames } from '../SkillActionNames';
import { ISkillState } from '../ISkill.State';

export class GetSkillAction extends AbstractSkillStoreAction {
  readonly type = SkillActionNames.GET_SKILL;

  constructor() {
    super();
  }

  execute(state: ISkillState): ISkillState {
    return {
      ...state,
    };
  }
}
