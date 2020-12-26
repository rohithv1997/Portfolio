import { AbstractHeaderStoreAction } from "../AbstractHeaderStoreAction";
import { HeaderActionNames } from "../HeaderActionNames";
import { IHeaderState } from "../IHeader.State";

export class GetHeaderDto extends AbstractHeaderStoreAction {
  readonly type = HeaderActionNames.GET_HEADER;

  constructor() {
    super();
  }

  execute(state: IHeaderState): IHeaderState{
    return {
      ...state
    };
  }
}
