import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {IntroDTO} from 'src/app/dto/intro-dto';
import {ApiService} from 'src/app/service/api.service';
import {AbstractIntroEffect} from '../AbstractIntro.Effect';
import {SetIntroAction} from '../Actions/SetIntro.Action';
import {IntroActionNames} from '../IntroActionNames';

@Injectable()
export class GetIntroEffect extends AbstractIntroEffect<SetIntroAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(IntroActionNames.GET_INTRO, actions$);
  }

  protected switchMapCallback(): Observable<IntroDTO> {
    return this.apiService.Intro;
  }

  protected mapCallback(args: IntroDTO): SetIntroAction {
    return new SetIntroAction(args);
  }

  public getIntroEffect: Observable<SetIntroAction> = createEffect(() => this.Effect);
}
