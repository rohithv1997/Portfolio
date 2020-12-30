import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IApp.State';
import { GetHeaderAction } from '../store/Header/Actions/GetHeader.Action';
import { GetIntroAction } from '../store/Intro/Actions/GetIntro.Action';
import { GetAboutAction } from '../store/About/Actions/GetAbout.Action';
import { GetFooterAction } from '../store/Footer/Actions/GetFooter.Action';
import { GetExperienceAction } from '../store/Experience/Actions/GetExperience.Action';

@Injectable({
  providedIn: 'root',
})
export class OnStartupService {
  constructor(private store: Store<fromApp.IAppState>) {}

  public onStartUp(): void {
    this.store.dispatch(new GetHeaderAction());
    this.store.dispatch(new GetIntroAction());
    this.store.dispatch(new GetAboutAction());
    this.store.dispatch(new GetFooterAction());
    this.store.dispatch(new GetExperienceAction());
  }
}
