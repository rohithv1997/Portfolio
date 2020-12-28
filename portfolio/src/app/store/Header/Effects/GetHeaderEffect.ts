import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { SetHeaderDto } from '../Actions/SetHeaderDto';
import { HeaderActionNames } from '../HeaderActionNames';

@Injectable()
export class GetHeaderEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  public getHeaderEffect: Observable<SetHeaderDto> = this.actions$.pipe(
    ofType(HeaderActionNames.GET_HEADER),
    switchMap(() => {
      return this.apiService.Header
    }),
    map((headerDto) => {
      return new SetHeaderDto(headerDto);
    })
  );
}
