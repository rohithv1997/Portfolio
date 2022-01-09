import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { EducationActionNames } from '../EducationActionNames';
import { IEducationState } from '../IEducation.State';
import { EducationDTO } from 'src/app/dto/education-dto';

export class SetEducationAction extends AbstractEducationStoreAction {
  readonly type = EducationActionNames.SET_EDUCATION;

  constructor(private payload: EducationDTO) {
    super();
  }

  execute(state: IEducationState): IEducationState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
