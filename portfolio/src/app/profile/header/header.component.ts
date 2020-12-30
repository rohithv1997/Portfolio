import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderDTO } from 'src/app/dto/header-dto';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IApp.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import { IHeaderState } from 'src/app/store/Header/IHeader.State';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent
  extends AbstractProfileComponent<HeaderDTO, IHeaderState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>, private router: Router) {
    super(store, 'headerState');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  redirectToRoot(): void {
    this.router.navigate(['/']);
  }
}
