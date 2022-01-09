import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractFooterReducer } from '../AbstractFooter.Reducer';
import { AbstractFooterStoreAction } from '../AbstractFooter.StoreAction';
import { FooterActionNames } from '../FooterActionNames';
import { IFooterState } from '../IFooter.State';

export class FooterReducer extends AbstractFooterReducer {
  protected readonly initialState: IFooterState = {
    dto: new FooterDTO(),
  };

  public execute(
    state = this.initialState,
    action: AbstractFooterStoreAction
  ): IFooterState {
    switch (action.type) {
      case FooterActionNames.GET_FOOTER:
      case FooterActionNames.SET_FOOTER:
        return action.execute(state);
      default:
        return state;
    }
  }
}
