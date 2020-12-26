import { AbstractIntroStoreAction } from '../AbstractIntroStoreAction';
import { IntroActionNames } from '../IntroActionNames';
import { IIntroState } from '../IIntro.State';

export class GetIntroDto extends AbstractIntroStoreAction {
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
