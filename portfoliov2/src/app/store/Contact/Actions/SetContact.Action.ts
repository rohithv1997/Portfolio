import { ContactDTO } from 'src/app/dto/contact-dto';
import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
import { IContactState } from '../IContact.State';

export class SetContactAction extends AbstractContactStoreAction {
  readonly type = ContactActionNames.SET_CONTACT;

  constructor(private payload: ContactDTO) {
    super();
  }

  execute(state: IContactState): IContactState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
