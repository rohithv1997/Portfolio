import { AbstractFooterStoreAction } from '../AbstractFooter.StoreAction';
import { FooterActionNames } from '../FooterActionNames';
export class GetFooterAction extends AbstractFooterStoreAction {
    constructor() {
        super(...arguments);
        this.type = FooterActionNames.GET_FOOTER;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetFooter.Action.js.map