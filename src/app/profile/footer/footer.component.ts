import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FooterDTO } from 'src/app/dto/footer-dto';
import { IFooterState } from 'src/app/store/Footer/IFooter.State';
import * as fromApp from '../../store/IApp.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent
  extends AbstractProfileComponent<FooterDTO, IFooterState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'footerState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
