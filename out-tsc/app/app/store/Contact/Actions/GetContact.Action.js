import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
export class GetContactAction extends AbstractContactStoreAction {
    constructor() {
        super();
        this.type = ContactActionNames.GET_CONTACT;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetContact.Action.js.map