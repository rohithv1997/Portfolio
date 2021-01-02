import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactDTO } from 'src/app/dto/contact-dto';
import { IContactState } from 'src/app/store/Contact/IContact.State';
import * as fromApp from '../../store/IApp.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent
  extends AbstractProfileComponent<ContactDTO, IContactState>
  implements OnInit, OnDestroy {
  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'contactState');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
