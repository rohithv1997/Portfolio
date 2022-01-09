import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractExperienceStoreAction } from './AbstractExperience.StoreAction';
import { IExperienceState } from './IExperience.State';

export abstract class AbstractExperienceEffect<
  TAction extends AbstractExperienceStoreAction
> extends AbstractAppEffect<ExperienceDTO, IExperienceState, TAction> {}
