import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractExperienceEffect } from '../AbstractExperience.Effect';
import { SetExperienceAction } from '../Actions/SetExperience.Action';
import { ExperienceActionNames } from '../ExperienceActionNames';
let GetExperienceEffect = class GetExperienceEffect extends AbstractExperienceEffect {
    constructor(actions$, apiService) {
        super(ExperienceActionNames.GET_EXPERIENCE, actions$);
        this.apiService = apiService;
        this.getIntroEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Experience;
    }
    mapCallback(args) {
        return new SetExperienceAction(args);
    }
};
__decorate([
    Effect()
], GetExperienceEffect.prototype, "getIntroEffect", void 0);
GetExperienceEffect = __decorate([
    Injectable()
], GetExperienceEffect);
export { GetExperienceEffect };
//# sourceMappingURL=GetExperience.Effect.js.map