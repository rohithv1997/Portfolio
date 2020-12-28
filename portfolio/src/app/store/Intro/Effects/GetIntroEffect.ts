import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { SetIntroDto } from '../Actions/SetIntroDto';
import { IntroActionNames } from '../IntroActionNames';

@Injectable()
export class GetIntroEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  public getIntroEffect: Observable<SetIntroDto> = this.actions$.pipe(
    ofType(IntroActionNames.GET_INTRO),
    switchMap(() => {
      return this.apiService.Intro;
    }),
    map((introDto) => {
      return new SetIntroDto(introDto);
    })
  );
}
