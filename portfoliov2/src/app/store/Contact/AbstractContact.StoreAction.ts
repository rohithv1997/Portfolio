import { ContactDTO } from 'src/app/dto/contact-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IContactState } from './IContact.State';

export abstract class AbstractContactStoreAction extends AbstractAppStoreAction<
  ContactDTO,
  IContactState
> {}
