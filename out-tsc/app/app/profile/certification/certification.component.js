import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let CertificationComponent = class CertificationComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'certificationState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
CertificationComponent = __decorate([
    Component({
        selector: 'app-certification',
        templateUrl: './certification.component.html',
        styleUrls: ['./certification.component.css'],
    })
], CertificationComponent);
export { CertificationComponent };
//# sourceMappingURL=certification.component.js.map