import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractEducationReducer } from '../AbstractEducation.Reducer';
import { AbstractEducationStoreAction } from '../AbstractEducation.StoreAction';
import { IEducationState } from '../IEducation.State';
import { EducationReducer } from './Education.Reducer';

export class EducationActionReducer extends AbstractAppActionReducer<
  EducationDTO,
  IEducationState,
  AbstractEducationStoreAction,
  AbstractEducationReducer
> {
  protected get reducer(): AbstractEducationReducer {
    return new EducationReducer();
  }
}
