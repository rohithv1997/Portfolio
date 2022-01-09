import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractIntroEffect } from '../AbstractIntro.Effect';
import { SetIntroAction } from '../Actions/SetIntro.Action';
import { IntroActionNames } from '../IntroActionNames';
let GetIntroEffect = class GetIntroEffect extends AbstractIntroEffect {
    constructor(actions$, apiService) {
        super(IntroActionNames.GET_INTRO, actions$);
        this.apiService = apiService;
        this.getIntroEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Intro;
    }
    mapCallback(args) {
        return new SetIntroAction(args);
    }
};
__decorate([
    Effect()
], GetIntroEffect.prototype, "getIntroEffect", void 0);
GetIntroEffect = __decorate([
    Injectable()
], GetIntroEffect);
export { GetIntroEffect };
//# sourceMappingURL=GetIntro.Effect.js.map