import { AbstractAppStoreAction } from './AbstractApp.StoreAction';
import { IState } from './IState';

export abstract class AbstractAppReducer<
  TState extends IState,
  TAction extends AbstractAppStoreAction<TState>
> {
  protected abstract readonly initialState: TState;

  public abstract execute(state: TState, action: TAction): TState;
}
