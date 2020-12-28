import { AbstractFooterStoreAction } from '../AbstractFooterStoreAction';
import { FooterActionNames } from '../FooterActionNames';
import { IFooterState } from '../IFooter.State';

export class GetFooterAction extends AbstractFooterStoreAction {
  readonly type = FooterActionNames.GET_FOOTER;

  execute(state: IFooterState): IFooterState {
    return {
      ...state,
    };
  }
}
