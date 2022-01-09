import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractEducationReducer } from '../AbstractEducation.Reducer';
import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { IEducationState } from '../IEducation.State';
import { EducationActionNames } from '../EducationActionNames';

export class EducationReducer extends AbstractEducationReducer {
  protected initialState: IEducationState = {
    dto: new EducationDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractEducationStoreAction
  ): IEducationState {
    switch (action.type) {
      case EducationActionNames.GET_EDUCATION:
      case EducationActionNames.SET_EDUCATION:
        return action.execute(state);
      default:
        return state;
    }
  }
}
