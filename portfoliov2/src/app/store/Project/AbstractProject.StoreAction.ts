import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IProjectState } from './IProject.State';

export abstract class AbstractProjectStoreAction extends AbstractAppStoreAction<
  ProjectDTO,
  IProjectState
> {}
