import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
let HeaderComponent = class HeaderComponent extends AbstractProfileComponent {
    constructor(store, router) {
        super(store, 'headerState');
        this.router = router;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    redirectToRoot() {
        this.router.navigate(['/']);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css'],
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map