import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { ProjectActionNames } from '../ProjectActionNames';
import { IProjectState } from '../IProject.State';
import { ProjectDTO } from 'src/app/dto/project-dto';

export class SetProjectAction extends AbstractProjectStoreAction {
  readonly type = ProjectActionNames.SET_PROJECT;

  constructor(private payload: ProjectDTO) {
    super();
  }

  execute(state: IProjectState): IProjectState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
