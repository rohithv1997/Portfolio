var ValidRouteService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
let ValidRouteService = ValidRouteService_1 = class ValidRouteService {
    constructor() {
        routes.forEach((route) => {
            switch (route.path) {
                case '':
                case undefined:
                case 'not-found':
                case '**':
                    break;
                default:
                    ValidRouteService_1.allowedRoutes.push(route.path);
            }
        });
    }
    get validRoutes() {
        return ValidRouteService_1.allowedRoutes;
    }
};
ValidRouteService.allowedRoutes = [];
ValidRouteService = ValidRouteService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ValidRouteService);
export { ValidRouteService };
//# sourceMappingURL=valid-route.service.js.map