import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IntroActionNames } from '../IntroActionNames';
export class SetIntroAction extends AbstractIntroStoreAction {
    constructor(payload) {
        super();
        this.payload = payload;
        this.type = IntroActionNames.SET_INTRO;
    }
    execute(state) {
        return Object.assign(Object.assign({}, state), { dto: this.payload });
    }
}
//# sourceMappingURL=SetIntro.Action.js.map