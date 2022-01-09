import { AbstractExperienceReducer } from '../AbstractExperience.Reducer';
import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { IExperienceState } from '../IExperience.State';
import { ExperienceActionNames } from '../ExperienceActionNames';
import { ExperienceDTO } from 'src/app/dto/experience-dto';

export class ExperienceReducer extends AbstractExperienceReducer {
  protected initialState: IExperienceState = {
    dto: new ExperienceDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractExperienceStoreAction
  ): IExperienceState {
    switch (action.type) {
      case ExperienceActionNames.GET_EXPERIENCE:
      case ExperienceActionNames.SET_EXPERIENCE:
        return action.execute(state);
      default:
        return state;
    }
  }
}
