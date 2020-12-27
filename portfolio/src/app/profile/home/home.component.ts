import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public data: string[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    routes.forEach((route) => {
      if (
        route.path !== '' &&
        route.path !== undefined &&
        route.path !== 'not-found'
      ) {
        this.data.push(route.path);
      }
    });
  }
}
