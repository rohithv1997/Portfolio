import { Action, ActionReducer } from '@ngrx/store';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractIntroStoreAction } from './AbstractIntroStoreAction';
import { IIntroState } from './IIntro.State';
import { IntroActionNames } from './IntroActionNames';

const initialState: IIntroState = {
  introDto: new IntroDTO(),
};

export const reducer: ActionReducer<IIntroState, Action> = (state, action) =>
  IntroReducer(state, action as AbstractIntroStoreAction);

export function IntroReducer(
  state = initialState,
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
