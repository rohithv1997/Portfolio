import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractProjectReducer } from '../AbstractProject.Reducer';
import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { IProjectState } from '../IProject.State';
import { ProjectReducer } from './Project.Reducer';

export class ProjectActionReducer extends AbstractAppActionReducer<
  ProjectDTO,
  IProjectState,
  AbstractProjectStoreAction,
  AbstractProjectReducer
> {
  protected get reducer(): AbstractProjectReducer {
    return new ProjectReducer();
  }
}
