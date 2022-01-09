import { FooterDTO } from 'src/app/dto/footer-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IFooterState } from './IFooter.State';

export abstract class AbstractFooterStoreAction extends AbstractAppStoreAction<
  FooterDTO,
  IFooterState
> {}
