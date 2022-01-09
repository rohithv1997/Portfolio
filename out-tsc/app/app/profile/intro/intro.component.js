import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let IntroComponent = class IntroComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'introState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
IntroComponent = __decorate([
    Component({
        selector: 'app-intro',
        templateUrl: './intro.component.html',
        styleUrls: ['./intro.component.css'],
    })
], IntroComponent);
export { IntroComponent };
//# sourceMappingURL=intro.component.js.map