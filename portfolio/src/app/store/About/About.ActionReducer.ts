import { Action, ActionReducer } from '@ngrx/store';
import { AboutReducer } from './About.Reducer';
import { AbstractAboutStoreAction } from './AbstractAbout.StoreAction';
import { IAboutState } from './IAbout.State';

export const aboutActionReducer: ActionReducer<IAboutState, Action> = (
  state,
  action
) => new AboutReducer().execute(state, action as AbstractAboutStoreAction);
