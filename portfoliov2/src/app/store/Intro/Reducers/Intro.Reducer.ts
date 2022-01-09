import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractIntroReducer } from '../AbstractIntro.Reducer';
import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IIntroState } from '../IIntro.State';
import { IntroActionNames } from '../IntroActionNames';

export class IntroReducer extends AbstractIntroReducer {
  protected initialState: IIntroState = {
    dto: new IntroDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractIntroStoreAction
  ): IIntroState {
    switch (action.type) {
      case IntroActionNames.GET_INTRO:
      case IntroActionNames.SET_INTRO:
        return action.execute(state);
      default:
        return state;
    }
  }
}
