import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IApp.State';
import { GetHeaderAction } from '../store/Header/Actions/GetHeader.Action';
import { GetIntroAction } from '../store/Intro/Actions/GetIntro.Action';
import { GetAboutAction } from '../store/About/Actions/GetAbout.Action';
import { GetFooterAction } from '../store/Footer/Actions/GetFooter.Action';
import { GetExperienceAction } from '../store/Experience/Actions/GetExperience.Action';
import { GetEducationAction } from '../store/Education/Actions/GetEducation.Action';
import { GetProjectAction } from '../store/Project/Actions/GetProject.Action';
import { GetSkillAction } from '../store/Skill/Actions/GetSkill.Action';
import { GetCertificationAction } from '../store/Certification/Actions/GetCertification.Action';

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
    this.store.dispatch(new GetEducationAction());
    this.store.dispatch(new GetProjectAction());
    this.store.dispatch(new GetSkillAction());
    this.store.dispatch(new GetCertificationAction());
  }
}
