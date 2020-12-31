import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { ISkillState } from './ISkill.State';

export abstract class AbstractSkillStoreAction extends AbstractAppStoreAction<
  SkillDTO,
  ISkillState
> {}
