import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractIntroReducer } from '../AbstractIntro.Reducer';
import { IntroActionNames } from '../IntroActionNames';
export class IntroReducer extends AbstractIntroReducer {
    constructor() {
        super(...arguments);
        this.initialState = {
            dto: new IntroDTO(),
        };
    }
    execute(state = this.initialState, action) {
        switch (action.type) {
            case IntroActionNames.GET_INTRO:
            case IntroActionNames.SET_INTRO:
                return action.execute(state);
            default:
                return state;
        }
    }
}
//# sourceMappingURL=Intro.Reducer.js.map