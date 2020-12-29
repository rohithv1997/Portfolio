import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FooterDTO } from 'src/app/dto/footer-dto';
import * as fromApp from '../../store/IApp.State';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public data!: FooterDTO;
  private subscription!: Subscription;

  constructor(private store: Store<fromApp.IAppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('footerState').subscribe((footerState) => {
      this.data = footerState.footerDto;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
