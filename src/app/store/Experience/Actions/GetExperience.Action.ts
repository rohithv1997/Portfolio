import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { ExperienceActionNames } from '../ExperienceActionNames';
import { IExperienceState } from '../IExperience.State';

export class GetExperienceAction extends AbstractExperienceStoreAction {
  readonly type = ExperienceActionNames.GET_EXPERIENCE;

  constructor() {
    super();
  }

  execute(state: IExperienceState): IExperienceState {
    return {
      ...state,
    };
  }
}
