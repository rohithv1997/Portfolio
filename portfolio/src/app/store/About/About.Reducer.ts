import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from './AboutActionNames';
import { AbstractAboutStoreAction } from './AbstractAbout.StoreAction';
import { IAboutState } from './IAbout.State';

export class AboutReducer {
  private static initialState: IAboutState = {
    aboutDto: new AboutDTO(),
  };

  public execute(
    state = AboutReducer.initialState,
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
