import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractHeaderStoreAction } from './AbstractHeader.StoreAction';
import { IHeaderState } from './IHeader.State';

export abstract class AbstractHeaderReducer extends AbstractAppReducer<
  HeaderDTO,
  IHeaderState,
  AbstractHeaderStoreAction
> {}
