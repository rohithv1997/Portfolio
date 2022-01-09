import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let FooterComponent = class FooterComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'footerState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css'],
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map