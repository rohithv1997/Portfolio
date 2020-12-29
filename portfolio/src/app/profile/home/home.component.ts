import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ValidRouteService } from 'src/app/service/valid-route.service';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private validRouteService: ValidRouteService
  ) {}

  ngOnInit(): void {
    this.data = this.validRouteService.validRoutes;
  }
}
