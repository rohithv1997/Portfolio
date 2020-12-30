import { AboutDTO } from 'src/app/dto/about-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractAboutStoreAction } from './AbstractAbout.StoreAction';
import { IAboutState } from './IAbout.State';

export abstract class AbstractAboutReducer extends AbstractAppReducer<
  AboutDTO,
  IAboutState,
  AbstractAboutStoreAction
> {}
