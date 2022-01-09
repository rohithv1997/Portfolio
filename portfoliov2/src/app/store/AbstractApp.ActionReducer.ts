import { Action, ActionReducer } from '@ngrx/store';
import { IDto } from '../dto/IDto';
import { AbstractAppReducer } from './AbstractApp.Reducer';
import { AbstractAppStoreAction } from './AbstractApp.StoreAction';
import { IState } from './IState';

export abstract class AbstractAppActionReducer<
  TDto extends IDto,
  TState extends IState<TDto>,
  TAction extends AbstractAppStoreAction<TDto, TState>,
  TReducer extends AbstractAppReducer<TDto, TState, TAction>
> {
  protected abstract get reducer(): TReducer;

  public actionReducer: ActionReducer<TState, Action> = (state, action) =>
    this.reducer.execute(state as TState, action as TAction);
}
