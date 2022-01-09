import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractExperienceReducer } from '../AbstractExperience.Reducer';
import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { IExperienceState } from '../IExperience.State';
import { ExperienceReducer } from './Experience.Reducer';

export class ExperienceActionReducer extends AbstractAppActionReducer<
  ExperienceDTO,
  IExperienceState,
  AbstractExperienceStoreAction,
  AbstractExperienceReducer
> {
  protected get reducer(): AbstractExperienceReducer {
    return new ExperienceReducer();
  }
}
