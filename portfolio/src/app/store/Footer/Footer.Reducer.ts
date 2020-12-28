import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractFooterStoreAction } from './AbstractFooterStoreAction';
import { FooterActionNames } from './FooterActionNames';
import { IFooterState } from './IFooter.State';

export class FooterReducer {
  private static initialState: IFooterState = {
    footerDto: new FooterDTO(),
  };

  public execute(
    state = FooterReducer.initialState,
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
