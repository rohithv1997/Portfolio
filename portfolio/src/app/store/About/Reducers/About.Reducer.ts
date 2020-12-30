import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutReducer } from '../AbstractAbout.Reducer';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';

export class AboutReducer extends AbstractAboutReducer {
  protected readonly initialState: IAboutState = {
    dto: new AboutDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractAboutStoreAction
  ): IAboutState {
    switch (action.type) {
      case AboutActionNames.GET_ABOUT:
      case AboutActionNames.SET_ABOUT:
        return action.execute(state);
      default:
        return state;
    }
  }
}
