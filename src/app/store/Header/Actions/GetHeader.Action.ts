import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
import { IHeaderState } from '../IHeader.State';

export class GetHeaderAction extends AbstractHeaderStoreAction {
  readonly type = HeaderActionNames.GET_HEADER;

  constructor() {
    super();
  }

  execute(state: IHeaderState): IHeaderState {
    return {
      ...state,
    };
  }
}
