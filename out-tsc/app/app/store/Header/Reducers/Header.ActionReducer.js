import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { HeaderReducer } from './Header.Reducer';
export class HeaderActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new HeaderReducer();
    }
}
//# sourceMappingURL=Header.ActionReducer.js.map