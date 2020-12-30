import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutDTO } from 'src/app/dto/about-dto';
import { IAboutState } from 'src/app/store/About/IAbout.State';
import * as fromApp from '../../store/IApp.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent
  extends AbstractProfileComponent<AboutDTO, IAboutState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'aboutState');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
