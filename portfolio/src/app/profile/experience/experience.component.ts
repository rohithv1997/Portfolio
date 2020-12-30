import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { IExperienceState } from 'src/app/store/Experience/IExperience.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IApp.State';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent
  extends AbstractProfileComponent<ExperienceDTO, IExperienceState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'experienceState');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
