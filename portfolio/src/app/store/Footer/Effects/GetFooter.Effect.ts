import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FooterDTO } from 'src/app/dto/footer-dto';
import { ApiService } from 'src/app/service/api.service';
import { AbstractAppEffect } from '../../Base/AbstractApp.Effect';
import { SetFooterAction } from '../Actions/SetFooter.Action';
import { FooterActionNames } from '../FooterActionNames';
import { IFooterState } from '../IFooter.State';

@Injectable()
export class GetFooterEffect extends AbstractAppEffect<
  IFooterState,
  FooterDTO,
  SetFooterAction
> {
  protected switchMapCallback(): Observable<FooterDTO> {
    return this.apiService.Footer;
  }
  protected mapCallback(args: FooterDTO): SetFooterAction {
    return new SetFooterAction(args);
  }

  constructor(actions$: Actions, private apiService: ApiService) {
    super(FooterActionNames.GET_FOOTER, actions$);
  }

  @Effect()
  public getFooterEffect: Observable<SetFooterAction> = this.Effect;
}
