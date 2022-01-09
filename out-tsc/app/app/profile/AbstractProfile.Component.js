import { __decorate } from "tslib";
import { Directive } from '@angular/core';
let AbstractProfileComponent = class AbstractProfileComponent {
    constructor(store, state) {
        this.store = store;
        this.state = state;
    }
    ngOnInit() {
        this.subscription = this.store
            .select(this.state)
            .subscribe((storeState) => {
            this._data = storeState.dto;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get data() {
        return this._data;
    }
};
AbstractProfileComponent = __decorate([
    Directive()
], AbstractProfileComponent);
export { AbstractProfileComponent };
//# sourceMappingURL=AbstractProfile.Component.js.map