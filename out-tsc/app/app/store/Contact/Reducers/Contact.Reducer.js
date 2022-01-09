import { ContactDTO } from 'src/app/dto/contact-dto';
import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactReducer } from '../AbstractContact.Reducer';
export class ContactReducer extends AbstractContactReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new ContactDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case ContactActionNames.GET_CONTACT:
            case ContactActionNames.SET_CONTACT:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Contact.Reducer.js.map