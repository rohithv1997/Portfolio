import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
export class GetHeaderAction extends AbstractHeaderStoreAction {
    constructor() {
        super();
        this.type = HeaderActionNames.GET_HEADER;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetHeader.Action.js.map