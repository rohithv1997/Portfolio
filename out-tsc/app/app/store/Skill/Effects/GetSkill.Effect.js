import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractSkillEffect } from '../AbstractSkill.Effect';
import { SetSkillAction } from '../Actions/SetSkill.Action';
import { SkillActionNames } from '../SkillActionNames';
let GetSkillEffect = class GetSkillEffect extends AbstractSkillEffect {
    constructor(actions$, apiService) {
        super(SkillActionNames.GET_SKILL, actions$);
        this.apiService = apiService;
        this.getSkillEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Skill;
    }
    mapCallback(args) {
        return new SetSkillAction(args);
    }
};
__decorate([
    Effect()
], GetSkillEffect.prototype, "getSkillEffect", void 0);
GetSkillEffect = __decorate([
    Injectable()
], GetSkillEffect);
export { GetSkillEffect };
//# sourceMappingURL=GetSkill.Effect.js.map