import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { ProjectActionNames } from '../ProjectActionNames';
import { IProjectState } from '../IProject.State';

export class GetProjectAction extends AbstractProjectStoreAction {
  readonly type = ProjectActionNames.GET_PROJECT;

  constructor() {
    super();
  }

  execute(state: IProjectState): IProjectState {
    return {
      ...state,
    };
  }
}
