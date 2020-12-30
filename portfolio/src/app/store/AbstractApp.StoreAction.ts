import { Action } from '@ngrx/store';
import { IDto } from '../dto/IDto';
import { IState } from './IState';

export abstract class AbstractAppStoreAction<
  TDto extends IDto,
  TState extends IState<TDto>
> implements Action {
  abstract readonly type: string;

  abstract execute(state: TState): TState;
}
