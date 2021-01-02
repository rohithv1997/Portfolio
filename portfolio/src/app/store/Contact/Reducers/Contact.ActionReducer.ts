import { ContactReducer } from './Contact.Reducer';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
import { IContactState } from '../IContact.State';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractContactReducer } from '../AbstractContact.Reducer';
import { ContactDTO } from 'src/app/dto/contact-dto';

export class ContactActionReducer extends AbstractAppActionReducer<
  ContactDTO,
  IContactState,
  AbstractContactStoreAction,
  AbstractContactReducer
> {
  protected get reducer(): AbstractContactReducer {
    return new ContactReducer();
  }
}
