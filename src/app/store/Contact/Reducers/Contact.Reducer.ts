import { ContactDTO } from 'src/app/dto/contact-dto';
import { ContactActionNames } from '../ContactActionNames';
import { AbstractContactReducer } from '../AbstractContact.Reducer';
import { AbstractContactStoreAction } from '../AbstractContact.StoreAction';
import { IContactState } from '../IContact.State';

export class ContactReducer extends AbstractContactReducer {
  protected readonly initialState: IContactState = {
    dto: new ContactDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractContactStoreAction
  ): IContactState {
    switch (action.type) {
      case ContactActionNames.GET_CONTACT:
      case ContactActionNames.SET_CONTACT:
        return action.execute(state);
      default:
        return state;
    }
  }
}
