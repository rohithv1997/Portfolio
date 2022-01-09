import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractHeaderReducer } from '../AbstractHeader.Reducer';
import { HeaderActionNames } from '../HeaderActionNames';
export class HeaderReducer extends AbstractHeaderReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new HeaderDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case HeaderActionNames.GET_HEADER:
            case HeaderActionNames.SET_HEADER:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Header.Reducer.js.map