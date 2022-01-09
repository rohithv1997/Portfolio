import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
export class SetContactAction extends AbstractContactStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = ContactActionNames.SET_CONTACT;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetContact.Action.js.map