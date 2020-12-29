import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractHeaderReducer } from '../AbstractHeader.Reducer';
import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
import { IHeaderState } from '../IHeader.State';

export class HeaderReducer extends AbstractHeaderReducer {
  protected initialState: IHeaderState = {
    headerDto: new HeaderDTO(),
  };

  public execute(
    state = this.initialState,
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
}
