import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IntroActionNames } from '../IntroActionNames';
import { IIntroState } from '../IIntro.State';

export class GetIntroAction extends AbstractIntroStoreAction {
  readonly type = IntroActionNames.GET_INTRO;

  constructor() {
    super();
  }

  execute(state: IIntroState): IIntroState {
    return {
      ...state,
    };
  }
}
