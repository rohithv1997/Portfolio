import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutStoreAction } from '../AbstractAboutStoreAction';
import { IAboutState } from '../IAbout.State';

export class GetAboutDto extends AbstractAboutStoreAction {
  readonly type = AboutActionNames.GET_ABOUTDTO;

  constructor() {
    super();
  }

  execute(state: IAboutState): IAboutState {
    return {
      ...state,
    };
  }
}
