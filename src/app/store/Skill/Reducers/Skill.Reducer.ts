import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractSkillReducer } from '../AbstractSkill.Reducer';
import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { ISkillState } from '../ISkill.State';
import { SkillActionNames } from '../SkillActionNames';

export class SkillReducer extends AbstractSkillReducer {
  protected initialState: ISkillState = {
    dto: new SkillDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractSkillStoreAction
  ): ISkillState {
    switch (action.type) {
      case SkillActionNames.GET_SKILL:
      case SkillActionNames.SET_SKILL:
        return action.execute(state);
      default:
        return state;
    }
  }
}
