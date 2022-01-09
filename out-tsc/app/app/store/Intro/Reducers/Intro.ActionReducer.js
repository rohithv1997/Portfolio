import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { IntroReducer } from './Intro.Reducer';
export class IntroActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new IntroReducer();
    }
}
//# sourceMappingURL=Intro.ActionReducer.js.map