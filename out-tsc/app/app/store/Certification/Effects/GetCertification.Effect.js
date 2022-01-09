import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractCertificationEffect } from '../AbstractCertification.Effect';
import { SetCertificationAction } from '../Actions/SetCertification.Action';
import { CertificationActionNames } from '../CertificationActionNames';
let GetCertificationEffect = class GetCertificationEffect extends AbstractCertificationEffect {
    constructor(actions$, apiService) {
        super(CertificationActionNames.GET_CERTIFICATION, actions$);
        this.apiService = apiService;
        this.getCertificationEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Certification;
    }
    mapCallback(args) {
        return new SetCertificationAction(args);
    }
};
__decorate([
    Effect()
], GetCertificationEffect.prototype, "getCertificationEffect", void 0);
GetCertificationEffect = __decorate([
    Injectable()
], GetCertificationEffect);
export { GetCertificationEffect };
//# sourceMappingURL=GetCertification.Effect.js.map