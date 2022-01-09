import { Injectable } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class ValidRouteService {
  private static allowedRoutes: string[] = [];

  constructor() {
    routes.forEach((route) => {
      switch (route.path) {
        case '':
        case undefined:
        case 'not-found':
        case '**':
          break;
        default:
          ValidRouteService.allowedRoutes.push(route.path);
      }
    });
  }

  public get validRoutes(): string[] {
    return ValidRouteService.allowedRoutes;
  }
}
