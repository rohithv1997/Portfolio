import { ContactReducer } from './Contact.Reducer';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
export class ContactActionReducer extends AbstractAppActionReducer {
    get reducer() {
        return new ContactReducer();
    }
}
//# sourceMappingURL=Contact.ActionReducer.js.map