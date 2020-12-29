import { AboutReducer } from './About.Reducer';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractAboutReducer } from '../AbstractAbout.Reducer';

export class AboutActionReducer extends AbstractAppActionReducer<
  IAboutState,
  AbstractAboutStoreAction,
  AbstractAboutReducer
> {
  protected get reducer(): AbstractAboutReducer {
    return new AboutReducer();
  }
}
