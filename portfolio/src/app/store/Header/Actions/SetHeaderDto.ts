import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractHeaderStoreAction } from '../AbstractHeaderStoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
import { IHeaderState } from '../IHeader.State';

export class SetHeaderDto extends AbstractHeaderStoreAction {
  readonly type = HeaderActionNames.SET_HEADER;

  constructor(public payload: HeaderDTO) {
    super();
  }

  execute(state: IHeaderState): IHeaderState {
    return {
      ...state,
      headerDto: this.payload,
    };
  }
}
