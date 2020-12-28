import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/Base/IApp.State';
import { GetHeaderDto } from '../store/Header/Actions/GetHeaderDto';
import { GetIntroDto } from '../store/Intro/Actions/GetIntroDto';
import { GetAboutAction } from '../store/About/Actions/GetAbout.Action';
import { GetFooterAction } from '../store/Footer/Actions/GetFooter.Action';

@Injectable({
  providedIn: 'root',
})
export class OnStartupService {
  constructor(private store: Store<fromApp.IAppState>) {}

  public onStartUp(): void {
    this.store.dispatch(new GetHeaderDto());
    this.store.dispatch(new GetIntroDto());
    this.store.dispatch(new GetAboutAction());
    this.store.dispatch(new GetFooterAction());
  }
}
