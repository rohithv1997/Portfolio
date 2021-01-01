import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CertificationDTO } from 'src/app/dto/certification-dto';
import { ApiService } from 'src/app/service/api.service';
import { AbstractCertificationEffect } from '../AbstractCertification.Effect';
import { SetCertificationAction } from '../Actions/SetCertification.Action';
import { CertificationActionNames } from '../CertificationActionNames';

@Injectable()
export class GetCertificationEffect extends AbstractCertificationEffect<SetCertificationAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(CertificationActionNames.GET_CERTIFICATION, actions$);
  }

  protected switchMapCallback(): Observable<CertificationDTO> {
    return this.apiService.Certification;
  }

  protected mapCallback(args: CertificationDTO): SetCertificationAction {
    return new SetCertificationAction(args);
  }

  @Effect()
  public getCertificationEffect: Observable<SetCertificationAction> = this.Effect;
}
