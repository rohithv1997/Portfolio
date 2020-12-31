import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractSkillReducer } from '../AbstractSkill.Reducer';
import { AbstractSkillStoreAction } from '../AbstractSkill.StoreAction';
import { ISkillState } from '../ISkill.State';
import { SkillReducer } from './Skill.Reducer';

export class SkillActionReducer extends AbstractAppActionReducer<
  SkillDTO,
  ISkillState,
  AbstractSkillStoreAction,
  AbstractSkillReducer
> {
  protected get reducer(): AbstractSkillReducer {
    return new SkillReducer();
  }
}
