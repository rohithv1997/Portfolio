import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractFooterStoreAction } from './AbstractFooter.StoreAction';
import { IFooterState } from './IFooter.State';

export abstract class AbstractFooterEffect<
  TAction extends AbstractFooterStoreAction
> extends AbstractAppEffect<IFooterState, FooterDTO, TAction> {}
