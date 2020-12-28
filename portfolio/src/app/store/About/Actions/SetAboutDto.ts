import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutStoreAction } from '../AbstractAboutStoreAction';
import { IAboutState } from '../IAbout.State';

export class SetAboutDto extends AbstractAboutStoreAction {
  readonly type = AboutActionNames.SET_ABOUTDTO;

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
