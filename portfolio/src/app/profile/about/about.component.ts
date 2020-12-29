import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AboutDTO } from 'src/app/dto/about-dto';
import * as fromApp from '../../store/IApp.State';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  public data!: AboutDTO;
  private subscription!: Subscription;

  constructor(private store: Store<fromApp.IAppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('aboutState').subscribe((aboutState) => {
      this.data = aboutState.aboutDto;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
