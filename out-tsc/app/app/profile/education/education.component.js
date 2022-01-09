import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
let EducationComponent = class EducationComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'educationState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
EducationComponent = __decorate([
    Component({
        selector: 'app-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.css'],
        providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false },
            },
        ],
    })
], EducationComponent);
export { EducationComponent };
//# sourceMappingURL=education.component.js.map