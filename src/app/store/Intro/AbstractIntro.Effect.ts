import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractAppEffect } from '../AbstractApp.Effect';
import { AbstractIntroStoreAction } from './AbstractIntro.StoreAction';
import { IIntroState } from './IIntro.State';

export abstract class AbstractIntroEffect<
  TAction extends AbstractIntroStoreAction
> extends AbstractAppEffect<IntroDTO, IIntroState, TAction> {}
