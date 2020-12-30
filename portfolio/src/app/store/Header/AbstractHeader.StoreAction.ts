import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IHeaderState } from './IHeader.State';

export abstract class AbstractHeaderStoreAction extends AbstractAppStoreAction<
  HeaderDTO,
  IHeaderState
> {}
