import { HeaderDTO } from 'src/app/dto/header-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractHeaderReducer } from '../AbstractHeader.Reducer';
import { AbstractHeaderStoreAction } from '../AbstractHeader.StoreAction';
import { IHeaderState } from '../IHeader.State';
import { HeaderReducer } from './Header.Reducer';

export class HeaderActionReducer extends AbstractAppActionReducer<
  HeaderDTO,
  IHeaderState,
  AbstractHeaderStoreAction,
  AbstractHeaderReducer
> {
  protected get reducer(): AbstractHeaderReducer {
    return new HeaderReducer();
  }
}
