import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractEducationStoreAction } from './AbstractEducation.StoreAction';
import { IEducationState } from './IEducation.State';

export abstract class AbstractEducationReducer extends AbstractAppReducer<
  EducationDTO,
  IEducationState,
  AbstractEducationStoreAction
> {}
