import { Action, ActionReducer } from '@ngrx/store';
import { AboutDTO } from 'src/app/dto/about-dto';
import { AboutActionNames } from './AboutActionNames';
import { AbstractAboutStoreAction } from './AbstractAboutStoreAction';
import { IAboutState } from './IAbout.State';

const initialState: IAboutState = {
  aboutDto: new AboutDTO(),
};

export const aboutReducerMap: ActionReducer<IAboutState, Action> = (
  state,
  action
) => aboutReducer(state, action as AbstractAboutStoreAction);

export function aboutReducer(
  state = initialState,
  action: AbstractAboutStoreAction
): IAboutState {
  switch (action.type) {
    case AboutActionNames.GET_ABOUTDTO:
    case AboutActionNames.SET_ABOUTDTO:
      return action.execute(state);
    default:
      return state;
  }
}
