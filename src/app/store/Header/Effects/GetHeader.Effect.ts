import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HeaderDTO} from 'src/app/dto/header-dto';
import {ApiService} from 'src/app/service/api.service';
import {AbstractHeaderEffect} from '../AbstractHeader.Effect';
import {SetHeaderAction} from '../Actions/SetHeader.Action';
import {HeaderActionNames} from '../HeaderActionNames';

@Injectable()
export class GetHeaderEffect extends AbstractHeaderEffect<SetHeaderAction> {
  protected switchMapCallback(): Observable<HeaderDTO> {
    return this.apiService.Header;
  }

  protected mapCallback(args: HeaderDTO): SetHeaderAction {
    return new SetHeaderAction(args);
  }

  constructor(actions$: Actions, private apiService: ApiService) {
    super(HeaderActionNames.GET_HEADER, actions$);
  }

  public getHeaderEffect: Observable<SetHeaderAction> = createEffect(() => this.Effect);
}
