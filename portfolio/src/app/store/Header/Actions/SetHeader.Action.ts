import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
import { IHeaderState } from '../IHeader.State';

export class SetHeaderAction extends AbstractHeaderStoreAction {
  readonly type = HeaderActionNames.SET_HEADER;

  constructor(private payload: HeaderDTO) {
    super();
  }

  execute(state: IHeaderState): IHeaderState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
