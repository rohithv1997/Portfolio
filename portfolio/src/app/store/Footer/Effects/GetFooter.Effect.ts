import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { FooterDTO } from 'src/app/dto/footer-dto';
import { ApiService } from 'src/app/service/api.service';
import { AbstractFooterEffect } from '../AbstractFooter.Effect';
import { SetFooterAction } from '../Actions/SetFooter.Action';
import { FooterActionNames } from '../FooterActionNames';

@Injectable()
export class GetFooterEffect extends AbstractFooterEffect<SetFooterAction> {
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
