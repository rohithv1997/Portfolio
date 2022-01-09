import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractProjectEffect } from '../AbstractProject.Effect';
import { SetProjectAction } from '../Actions/SetProject.Action';
import { ProjectActionNames } from '../ProjectActionNames';
let GetProjectEffect = class GetProjectEffect extends AbstractProjectEffect {
    constructor(actions$, apiService) {
        super(ProjectActionNames.GET_PROJECT, actions$);
        this.apiService = apiService;
        this.getProjectEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Project;
    }
    mapCallback(args) {
        return new SetProjectAction(args);
    }
};
__decorate([
    Effect()
], GetProjectEffect.prototype, "getProjectEffect", void 0);
GetProjectEffect = __decorate([
    Injectable()
], GetProjectEffect);
export { GetProjectEffect };
//# sourceMappingURL=GetProject.Effect.js.map