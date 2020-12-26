import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HeaderDTO } from 'src/app/dto/header-dto';
import { environment } from 'src/environments/environment';
import { SetHeaderDto } from '../Actions/SetHeaderDto';
import { HeaderActionNames } from '../HeaderActionNames';

@Injectable()
export class GetHeaderEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  public getHeaderEffect: Observable<SetHeaderDto> = this.actions$.pipe(
    ofType(HeaderActionNames.GET_HEADER),
    switchMap(() => {
      return this.httpClient.get<HeaderDTO>(environment.apiUrlHeaderGet);
    }),
    map((headerDto) => {
      return new SetHeaderDto(headerDto);
    })
  );
}
