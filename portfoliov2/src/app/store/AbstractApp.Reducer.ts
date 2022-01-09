import { IDto } from '../dto/IDto';
import { AbstractAppStoreAction } from './AbstractApp.StoreAction';
import { IState } from './IState';

export abstract class AbstractAppReducer<
  TDto extends IDto,
  TState extends IState<TDto>,
  TAction extends AbstractAppStoreAction<TDto, TState>
> {
  protected abstract readonly initialState: TState;

  public abstract execute(state: TState, action: TAction): TState;
}
