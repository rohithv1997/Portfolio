import { AbstractFooterStoreAction } from '../AbstractFooter.StoreAction';
import { FooterReducer } from './Footer.Reducer';
import { IFooterState } from '../IFooter.State';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractFooterReducer } from '../AbstractFooter.Reducer';

export class FooterActionReducer extends AbstractAppActionReducer<
  IFooterState,
  AbstractFooterStoreAction,
  AbstractFooterReducer
> {
  protected get reducer(): AbstractFooterReducer {
    return new FooterReducer();
  }
}
