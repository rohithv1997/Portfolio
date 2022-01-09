import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let ExperienceComponent = class ExperienceComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'experienceState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
ExperienceComponent = __decorate([
    Component({
        selector: 'app-experience',
        templateUrl: './experience.component.html',
        styleUrls: ['./experience.component.css'],
        providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false },
            },
        ],
    })
], ExperienceComponent);
export { ExperienceComponent };
//# sourceMappingURL=experience.component.js.map