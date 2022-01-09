import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { AbstractHeaderEffect } from '../AbstractHeader.Effect';
import { SetHeaderAction } from '../Actions/SetHeader.Action';
import { HeaderActionNames } from '../HeaderActionNames';
let GetHeaderEffect = class GetHeaderEffect extends AbstractHeaderEffect {
    constructor(actions$, apiService) {
        super(HeaderActionNames.GET_HEADER, actions$);
        this.apiService = apiService;
        this.getHeaderEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Header;
    }
    mapCallback(args) {
        return new SetHeaderAction(args);
    }
};
__decorate([
    Effect()
], GetHeaderEffect.prototype, "getHeaderEffect", void 0);
GetHeaderEffect = __decorate([
    Injectable()
], GetHeaderEffect);
export { GetHeaderEffect };
//# sourceMappingURL=GetHeader.Effect.js.map