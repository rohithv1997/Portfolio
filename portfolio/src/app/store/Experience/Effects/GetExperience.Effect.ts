import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { ApiService } from 'src/app/service/api.service';
import { AbstractExperienceEffect } from '../AbstractExperience.Effect';
import { SetExperienceAction } from '../Actions/SetExperience.Action';
import { ExperienceActionNames } from '../ExperienceActionNames';

@Injectable()
export class GetExperienceEffect extends AbstractExperienceEffect<SetExperienceAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(ExperienceActionNames.GET_EXPERIENCE, actions$);
  }

  protected switchMapCallback(): Observable<ExperienceDTO> {
    return this.apiService.Experience;
  }

  protected mapCallback(args: ExperienceDTO): SetExperienceAction {
    return new SetExperienceAction(args);
  }

  @Effect()
  public getIntroEffect: Observable<SetExperienceAction> = this.Effect;
}
