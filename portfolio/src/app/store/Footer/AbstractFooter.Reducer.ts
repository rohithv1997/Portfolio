import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractFooterStoreAction } from './AbstractFooter.StoreAction';
import { IFooterState } from './IFooter.State';

export abstract class AbstractFooterReducer extends AbstractAppReducer<
  IFooterState,
  AbstractFooterStoreAction
> {}
