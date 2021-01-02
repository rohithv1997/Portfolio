import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ContactDTO } from 'src/app/dto/contact-dto';
import { ApiService } from 'src/app/service/api.service';
import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactEffect } from '../AbstractContact.Effect';
import { SetContactAction } from '../Actions/SetContact.Action';

@Injectable()
export class GetContactEffect extends AbstractContactEffect<SetContactAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(ContactActionNames.GET_CONTACT, actions$);
  }

  protected switchMapCallback(): Observable<ContactDTO> {
    return this.apiService.Contact;
  }
  protected mapCallback(args: ContactDTO): SetContactAction {
    return new SetContactAction(args);
  }

  @Effect()
  public getContactEffect: Observable<SetContactAction> = this.Effect;
}
