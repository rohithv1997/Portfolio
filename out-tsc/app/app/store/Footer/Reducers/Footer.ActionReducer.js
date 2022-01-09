import { FooterReducer } from './Footer.Reducer';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
export class FooterActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new FooterReducer();
    }
}
//# sourceMappingURL=Footer.ActionReducer.js.map