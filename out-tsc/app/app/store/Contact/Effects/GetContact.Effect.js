import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactEffect } from '../AbstractContact.Effect';
import { SetContactAction } from '../Actions/SetContact.Action';
let GetContactEffect = class GetContactEffect extends AbstractContactEffect {
    constructor(actions$, apiService) {
        super(ContactActionNames.GET_CONTACT, actions$);
        this.apiService = apiService;
        this.getContactEffect = this.Effect;
    }
    switchMapCallback() {
        return this.apiService.Contact;
    }
    mapCallback(args) {
        return new SetContactAction(args);
    }
};
__decorate([
    Effect()
], GetContactEffect.prototype, "getContactEffect", void 0);
GetContactEffect = __decorate([
    Injectable()
], GetContactEffect);
export { GetContactEffect };
//# sourceMappingURL=GetContact.Effect.js.map