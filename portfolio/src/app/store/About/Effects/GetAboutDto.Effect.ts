import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AboutDTO } from 'src/app/dto/about-dto';
import { environment } from 'src/environments/environment';
import { AboutActionNames } from '../AboutActionNames';
import { SetAboutDto } from '../Actions/SetAboutDto';

@Injectable()
export class GetAboutDtoEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  public getAboutDtoEffect: Observable<SetAboutDto> = this.actions$.pipe(
    ofType(AboutActionNames.GET_ABOUTDTO),
    switchMap(() => {
      return this.httpClient.get<AboutDTO>(environment.apiUrlAboutGet);
    }),
    map((aboutDto) => {
      return new SetAboutDto(aboutDto);
    })
  );
}
