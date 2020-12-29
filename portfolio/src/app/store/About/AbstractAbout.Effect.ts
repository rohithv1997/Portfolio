import { AboutDTO } from 'src/app/dto/about-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractAboutStoreAction } from './AbstractAbout.StoreAction';
import { IAboutState } from './IAbout.State';

export abstract class AbstractAboutEffect<
  TAction extends AbstractAboutStoreAction
> extends AbstractAppEffect<IAboutState, AboutDTO, TAction> {}
