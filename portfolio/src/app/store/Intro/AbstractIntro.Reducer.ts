import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractAppReducer } from '../AbstractApp.Reducer';
import { AbstractIntroStoreAction } from './AbstractIntro.StoreAction';
import { IIntroState } from './IIntro.State';

export abstract class AbstractIntroReducer extends AbstractAppReducer<
  IntroDTO,
  IIntroState,
  AbstractIntroStoreAction
> {}
