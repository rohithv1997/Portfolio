import { Action, ActionReducer } from '@ngrx/store';
import { AbstractFooterStoreAction } from './AbstractFooterStoreAction';
import { FooterReducer } from './Footer.Reducer';
import { IFooterState } from './IFooter.State';

export const footerActionReducer: ActionReducer<IFooterState, Action> = (
  state,
  action
): IFooterState =>
  new FooterReducer().execute(state, action as AbstractFooterStoreAction);
