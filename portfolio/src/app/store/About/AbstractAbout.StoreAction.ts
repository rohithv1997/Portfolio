import { AboutDTO } from 'src/app/dto/about-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IAboutState } from './IAbout.State';

export abstract class AbstractAboutStoreAction extends AbstractAppStoreAction<
  AboutDTO,
  IAboutState
> {}
