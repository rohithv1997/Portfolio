import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let ProjectsComponent = class ProjectsComponent extends AbstractProfileComponent {
    constructor(store) {
        super(store, 'projectState');
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
ProjectsComponent = __decorate([
    Component({
        selector: 'app-projects',
        templateUrl: './projects.component.html',
        styleUrls: ['./projects.component.css'],
    })
], ProjectsComponent);
export { ProjectsComponent };
//# sourceMappingURL=projects.component.js.map