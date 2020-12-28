import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';

export class SetAboutAction extends AbstractAboutStoreAction {
  readonly type = AboutActionNames.SET_ABOUT;

  constructor(public payload: AboutDTO) {
    super();
  }

  execute(state: IAboutState): IAboutState {
    return {
      ...state,
      aboutDto: this.payload,
    };
  }
}
