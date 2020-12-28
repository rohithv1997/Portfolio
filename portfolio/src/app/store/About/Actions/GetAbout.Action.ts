import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';

export class GetAboutAction extends AbstractAboutStoreAction {
  readonly type = AboutActionNames.GET_ABOUT;

  constructor() {
    super();
  }

  execute(state: IAboutState): IAboutState {
    return {
      ...state,
    };
  }
}
