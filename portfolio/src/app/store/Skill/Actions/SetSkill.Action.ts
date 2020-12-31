import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { SkillActionNames } from '../SkillActionNames';
import { ISkillState } from '../ISkill.State';
import { SkillDTO } from 'src/app/dto/skill-dto';

export class SetSkillAction extends AbstractSkillStoreAction {
  readonly type = SkillActionNames.SET_SKILL;

  constructor(private payload: SkillDTO) {
    super();
  }

  execute(state: ISkillState): ISkillState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
