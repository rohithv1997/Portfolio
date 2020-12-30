import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IExperienceState } from './IExperience.State';

export abstract class AbstractExperienceStoreAction extends AbstractAppStoreAction<
  ExperienceDTO,
  IExperienceState
> {}
