import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {EducationDTO} from 'src/app/dto/education-dto';
import {ApiService} from 'src/app/service/api.service';
import {AbstractEducationEffect} from '../AbstractEducation.Effect';
import {SetEducationAction} from '../Actions/SetEducation.Action';
import {EducationActionNames} from '../EducationActionNames';

@Injectable()
export class GetEducationEffect extends AbstractEducationEffect<SetEducationAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(EducationActionNames.GET_EDUCATION, actions$);
  }

  protected switchMapCallback(): Observable<EducationDTO> {
    return this.apiService.Education;
  }

  protected mapCallback(args: EducationDTO): SetEducationAction {
    return new SetEducationAction(args);
  }

    public getEducationEffect: Observable<SetEducationAction> = createEffect(() => this.Effect);
}
