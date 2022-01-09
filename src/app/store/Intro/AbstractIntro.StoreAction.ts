import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractAppStoreAction } from '../AbstractApp.StoreAction';
import { IIntroState } from './IIntro.State';

export abstract class AbstractIntroStoreAction extends AbstractAppStoreAction<
  IntroDTO,
  IIntroState
> {}
