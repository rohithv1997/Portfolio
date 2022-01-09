import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractExperienceStoreAction } from './AbstractExperience.StoreAction';
import { IExperienceState } from './IExperience.State';

export abstract class AbstractExperienceReducer extends AbstractAppReducer<
  ExperienceDTO,
  IExperienceState,
  AbstractExperienceStoreAction
> {}
