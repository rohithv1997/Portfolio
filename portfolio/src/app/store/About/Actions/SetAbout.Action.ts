import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';

export class SetAboutAction extends AbstractAboutStoreAction {
  readonly type = AboutActionNames.SET_ABOUT;

  constructor(private payload: AboutDTO) {
    super();
  }

  execute(state: IAboutState): IAboutState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
