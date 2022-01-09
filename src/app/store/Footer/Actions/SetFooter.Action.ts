import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractFooterStoreAction } from '../AbstractFooter.StoreAction';
import { FooterActionNames } from '../FooterActionNames';
import { IFooterState } from '../IFooter.State';

export class SetFooterAction extends AbstractFooterStoreAction {
  readonly type = FooterActionNames.SET_FOOTER;

  constructor(private payload: FooterDTO) {
    super();
  }

  execute(state: IFooterState): IFooterState {
    return {
      ...state,
      dto: this.payload,
    };
  }
}
