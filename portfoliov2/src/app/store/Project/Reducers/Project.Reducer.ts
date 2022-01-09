import { ProjectDTO } from 'src/app/dto/project-dto';
import { AbstractProjectReducer } from '../AbstractProject.Reducer';
import { AbstractProjectStoreAction } from '../AbstractProject.StoreAction';
import { IProjectState } from '../IProject.State';
import { ProjectActionNames } from '../ProjectActionNames';

export class ProjectReducer extends AbstractProjectReducer {
  protected initialState: IProjectState = {
    dto: new ProjectDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractProjectStoreAction
  ): IProjectState {
    switch (action.type) {
      case ProjectActionNames.GET_PROJECT:
      case ProjectActionNames.SET_PROJECT:
        return action.execute(state);
      default:
        return state;
    }
  }
}
