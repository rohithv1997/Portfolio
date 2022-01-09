import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IntroActionNames } from '../IntroActionNames';
export class GetIntroAction extends AbstractIntroStoreAction {
    constructor() {
        super();
        this.type = IntroActionNames.GET_INTRO;
    }
    execute(state) {
        return Object.assign({}, state);
    }
}
//# sourceMappingURL=GetIntro.Action.js.map