import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractProjectStoreAction } from './AbstractProject.StoreAction';
import { IProjectState } from './IProject.State';

export abstract class AbstractProjectEffect<
  TAction extends AbstractProjectStoreAction
> extends AbstractAppEffect<ProjectDTO, IProjectState, TAction> {}
