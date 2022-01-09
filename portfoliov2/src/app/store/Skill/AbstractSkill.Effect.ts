import { SkillDTO } from 'src/app/dto/skill-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractSkillStoreAction } from './AbstractSkill.StoreAction';
import { ISkillState } from './ISkill.State';

export abstract class AbstractSkillEffect<
  TAction extends AbstractSkillStoreAction
> extends AbstractAppEffect<SkillDTO, ISkillState, TAction> {}
