import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderDTO } from 'src/app/dto/header-dto';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IAppState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public data!: HeaderDTO;
  private subscription!: Subscription;

  constructor(private store: Store<fromApp.IAppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('header').subscribe((headerState) => {
      this.data = headerState.headerDto;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
