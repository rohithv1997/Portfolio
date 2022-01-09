import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractProjectStoreAction } from './AbstractProject.StoreAction';
import { IProjectState } from './IProject.State';

export abstract class AbstractProjectReducer extends AbstractAppReducer<
  ProjectDTO,
  IProjectState,
  AbstractProjectStoreAction
> {}
