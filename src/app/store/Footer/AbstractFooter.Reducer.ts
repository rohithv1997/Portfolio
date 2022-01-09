import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractFooterStoreAction } from './AbstractFooter.StoreAction';
import { IFooterState } from './IFooter.State';

export abstract class AbstractFooterReducer extends AbstractAppReducer<
  FooterDTO,
  IFooterState,
  AbstractFooterStoreAction
> {}
