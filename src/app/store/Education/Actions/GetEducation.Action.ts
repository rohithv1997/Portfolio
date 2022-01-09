import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { EducationActionNames } from '../EducationActionNames';
import { IEducationState } from '../IEducation.State';

export class GetEducationAction extends AbstractEducationStoreAction {
  readonly type = EducationActionNames.GET_EDUCATION;

  constructor() {
    super();
  }

  execute(state: IEducationState): IEducationState {
    return {
      ...state,
    };
  }
}
