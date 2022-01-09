import { Component, OnDestroy, OnInit } from '@angular/core';
import { EducationDTO } from 'src/app/dto/education-dto';
import { IEducationState } from 'src/app/store/Education/IEducation.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import * as fromApp from '../../store/IApp.State';
import { Store } from '@ngrx/store';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class EducationComponent
  extends AbstractProfileComponent<EducationDTO, IEducationState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'educationState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
