import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { AbstractExperienceStoreAction } from '../AbstractExperience.StoreAction';
import { ExperienceActionNames } from '../ExperienceActionNames';
import { IExperienceState } from '../IExperience.State';

export class SetExperienceAction extends AbstractExperienceStoreAction {
  readonly type = ExperienceActionNames.SET_EXPERIENCE;

  constructor(private payload: ExperienceDTO) {
    super();
  }

  execute(state: IExperienceState): IExperienceState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
