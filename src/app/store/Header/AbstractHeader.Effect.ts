import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractHeaderStoreAction } from './AbstractHeader.StoreAction';
import { IHeaderState } from './IHeader.State';

export abstract class AbstractHeaderEffect<
  TAction extends AbstractHeaderStoreAction
> extends AbstractAppEffect<HeaderDTO, IHeaderState, TAction> {}
