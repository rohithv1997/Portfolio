import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
let HomeComponent = class HomeComponent {
    constructor(breakpointObserver, validRouteService) {
        this.breakpointObserver = breakpointObserver;
        this.validRouteService = validRouteService;
        this.isHandset$ = this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map((result) => result.matches), shareReplay());
        this.data = [];
    }
    ngOnInit() {
        this.data = this.validRouteService.validRoutes;
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map