import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let ContactComponent = class ContactComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'contactState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css'],
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map