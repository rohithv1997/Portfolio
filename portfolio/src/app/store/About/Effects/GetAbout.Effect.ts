import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AboutDTO } from 'src/app/dto/about-dto';
import { ApiService } from 'src/app/service/api.service';
import { AboutActionNames } from '../AboutActionNames';
import { AbstractAboutEffect } from '../AbstractAbout.Effect';
import { SetAboutAction } from '../Actions/SetAbout.Action';

@Injectable()
export class GetAboutEffect extends AbstractAboutEffect<SetAboutAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(AboutActionNames.GET_ABOUT, actions$);
  }

  protected switchMapCallback(): Observable<AboutDTO> {
    return this.apiService.About;
  }
  protected mapCallback(args: AboutDTO): SetAboutAction {
    return new SetAboutAction(args);
  }

  @Effect()
  public getAboutEffect: Observable<SetAboutAction> = this.Effect;
}
