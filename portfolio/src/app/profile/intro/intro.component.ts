import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IAppState';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit, OnDestroy {
  public data!: IntroDTO;
  private subscription!: Subscription;

  constructor(private store: Store<fromApp.IAppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('intro').subscribe((introState) => {
      this.data = introState.introDto;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
