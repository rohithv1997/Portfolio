import { AboutReducer } from './About.Reducer';
import { AbstractAboutStoreAction } from '../AbstractAbout.StoreAction';
import { IAboutState } from '../IAbout.State';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractAboutReducer } from '../AbstractAbout.Reducer';
import { AboutDTO } from 'src/app/dto/about-dto';

export class AboutActionReducer extends AbstractAppActionReducer<
  AboutDTO,
  IAboutState,
  AbstractAboutStoreAction,
  AbstractAboutReducer
> {
  protected get reducer(): AbstractAboutReducer {
    return new AboutReducer();
  }
}
