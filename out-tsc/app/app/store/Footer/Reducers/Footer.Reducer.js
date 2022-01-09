import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractFooterReducer } from '../AbstractFooter.Reducer';
import { FooterActionNames } from '../FooterActionNames';
export class FooterReducer extends AbstractFooterReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new FooterDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case FooterActionNames.GET_FOOTER:
            case FooterActionNames.SET_FOOTER:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Footer.Reducer.js.map