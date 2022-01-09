import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let SkillsComponent = class SkillsComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'skillState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
SkillsComponent = __decorate([
    Component({
        selector: 'app-skills',
        templateUrl: './skills.component.html',
        styleUrls: ['./skills.component.css'],
    })
], SkillsComponent);
export { SkillsComponent };
//# sourceMappingURL=skills.component.js.map