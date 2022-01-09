import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IntroActionNames } from '../IntroActionNames';
import { IIntroState } from '../IIntro.State';
import { IntroDTO } from 'src/app/dto/intro-dto';

export class SetIntroAction extends AbstractIntroStoreAction {
  readonly type = IntroActionNames.SET_INTRO;

  constructor(private payload: IntroDTO) {
    super();
  }

  execute(state: IIntroState): IIntroState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
