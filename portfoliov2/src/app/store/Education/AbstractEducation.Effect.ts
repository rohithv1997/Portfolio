import { EducationDTO } from 'src/app/dto/education-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractEducationStoreAction } from './AbstractEducation.StoreAction';
import { IEducationState } from './IEducation.State';

export abstract class AbstractEducationEffect<
  TAction extends AbstractEducationStoreAction
> extends AbstractAppEffect<EducationDTO, IEducationState, TAction> {}
