import { AbstractFooterStoreAction } from '../AbstractFooter.StoreAction';
import { FooterActionNames } from '../FooterActionNames';
export class SetFooterAction extends AbstractFooterStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = FooterActionNames.SET_FOOTER;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetFooter.Action.js.map