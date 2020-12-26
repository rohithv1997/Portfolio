import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { environment } from 'src/environments/environment';
import { SetIntroDto } from '../Actions/SetIntroDto';
import { IntroActionNames } from '../IntroActionNames';

@Injectable()
export class GetIntroEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  public getIntroEffect: Observable<SetIntroDto> = this.actions$.pipe(
    ofType(IntroActionNames.GET_INTRO),
    switchMap(() => {
      return this.httpClient.get<IntroDTO>(environment.apiUrlIntroGet);
    }),
    map((introDto) => {
      return new SetIntroDto(introDto);
    })
  );
}
