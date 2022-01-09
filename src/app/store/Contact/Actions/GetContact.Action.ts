import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
import { IContactState } from '../IContact.State';

export class GetContactAction extends AbstractContactStoreAction {
  readonly type = ContactActionNames.GET_CONTACT;

  constructor() {
    super();
  }

  execute(state: IContactState): IContactState {
    return {
      ...state,
    };
  }
}
