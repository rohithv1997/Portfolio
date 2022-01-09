import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractEducationEffect } from '../AbstractEducation.Effect';
import { SetEducationAction } from '../Actions/SetEducation.Action';
import { EducationActionNames } from '../EducationActionNames';
let GetEducationEffect = class GetEducationEffect extends AbstractEducationEffect {
    constructor(actions$, apiService) {
        super(EducationActionNames.GET_EDUCATION, actions$);
        this.apiService = apiService;
        this.getEducationEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Education;
    }
    mapCallback(args) {
        return new SetEducationAction(args);
    }
};
__decorate([
    Effect()
], GetEducationEffect.prototype, "getEducationEffect", void 0);
GetEducationEffect = __decorate([
    Injectable()
], GetEducationEffect);
export { GetEducationEffect };
//# sourceMappingURL=GetEducation.Effect.js.map