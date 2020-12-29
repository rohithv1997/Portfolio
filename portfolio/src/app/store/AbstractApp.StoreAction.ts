import { Action } from '@ngrx/store';
import { IState } from './IState';

export abstract class AbstractAppStoreAction<TState extends IState>
  implements Action {
  abstract readonly type: string;

  abstract execute(state: TState): TState;
}
