import { Component, OnDestroy, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { IExperienceState } from 'src/app/store/Experience/IExperience.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IApp.State';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ExperienceComponent
  extends AbstractProfileComponent<ExperienceDTO, IExperienceState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'experienceState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
