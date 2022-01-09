import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractFooterEffect } from '../AbstractFooter.Effect';
import { SetFooterAction } from '../Actions/SetFooter.Action';
import { FooterActionNames } from '../FooterActionNames';
let GetFooterEffect = class GetFooterEffect extends AbstractFooterEffect {
    constructor(actions$, apiService) {
        super(FooterActionNames.GET_FOOTER, actions$);
        this.apiService = apiService;
        this.getFooterEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Footer;
    }
    mapCallback(args) {
        return new SetFooterAction(args);
    }
};
__decorate([
    Effect()
], GetFooterEffect.prototype, "getFooterEffect", void 0);
GetFooterEffect = __decorate([
    Injectable()
], GetFooterEffect);
export { GetFooterEffect };
//# sourceMappingURL=GetFooter.Effect.js.map