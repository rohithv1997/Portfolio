import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { HeaderActionNames } from '../HeaderActionNames';
export class SetHeaderAction extends AbstractHeaderStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = HeaderActionNames.SET_HEADER;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetHeader.Action.js.map