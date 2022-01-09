import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IEducationState } from './IEducation.State';

export abstract class AbstractEducationStoreAction extends AbstractAppStoreAction<
  EducationDTO,
  IEducationState
> {}
