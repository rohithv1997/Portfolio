import { ContactDTO } from 'src/app/dto/contact-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractContactStoreAction } from './AbstractContact.StoreAction';
import { IContactState } from './IContact.State';

export abstract class AbstractContactReducer extends AbstractAppReducer<
  ContactDTO,
  IContactState,
  AbstractContactStoreAction
> {}
