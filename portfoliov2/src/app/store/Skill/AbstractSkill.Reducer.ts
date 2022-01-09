import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractSkillStoreAction } from './AbstractSkill.StoreAction';
import { ISkillState } from './ISkill.State';

export abstract class AbstractSkillReducer extends AbstractAppReducer<
  SkillDTO,
  ISkillState,
  AbstractSkillStoreAction
> {}
