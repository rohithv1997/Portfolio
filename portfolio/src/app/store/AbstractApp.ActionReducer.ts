import { Action, ActionReducer } from '@ngrx/store';
import { AbstractAppReducer } from './AbstractApp.Reducer';
import { AbstractAppStoreAction } from './AbstractApp.StoreAction';
import { IState } from './IState';

export abstract class AbstractAppActionReducer<
  TState extends IState,
  TAction extends AbstractAppStoreAction<TState>,
  TReducer extends AbstractAppReducer<TState, TAction>
> {
  protected abstract get reducer(): TReducer;

  public actionReducer: ActionReducer<TState, Action> = (state, action) =>
    this.reducer.execute(state as TState, action as TAction);
}
