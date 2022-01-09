import { ContactDTO } from 'src/app/dto/contact-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractContactStoreAction } from './AbstractContact.StoreAction';
import { IContactState } from './IContact.State';

export abstract class AbstractContactEffect<
  TAction extends AbstractContactStoreAction
> extends AbstractAppEffect<ContactDTO, IContactState, TAction> {}
