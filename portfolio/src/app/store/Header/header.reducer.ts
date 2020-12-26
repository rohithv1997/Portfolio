import { Action, ActionReducer } from '@ngrx/store';
import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractHeaderStoreAction } from './AbstractHeaderStoreAction';
import { HeaderActionNames } from './HeaderActionNames';
import { IHeaderState } from './IHeader.State';

const initialState: IHeaderState = {
  headerDto: new HeaderDTO(),
};

export const reducer: ActionReducer<IHeaderState, Action> = (state, action) =>
  headerReducer(state, action as AbstractHeaderStoreAction);

export function headerReducer(
  state = initialState,
  action: AbstractHeaderStoreAction
): IHeaderState {
  switch (action.type) {
    case HeaderActionNames.GET_HEADER:
    case HeaderActionNames.SET_HEADER:
      return action.execute(state);
    default:
      return state;
  }
}
