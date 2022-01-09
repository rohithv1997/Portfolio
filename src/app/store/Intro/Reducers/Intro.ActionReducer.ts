import { IntroDTO } from 'src/app/dto/intro-dto';
import { AbstractAppActionReducer } from '../../AbstractApp.ActionReducer';
import { AbstractIntroReducer } from '../AbstractIntro.Reducer';
import { AbstractIntroStoreAction } from '../AbstractIntro.StoreAction';
import { IIntroState } from '../IIntro.State';
import { IntroReducer } from './Intro.Reducer';

export class IntroActionReducer extends AbstractAppActionReducer<
  IntroDTO,
  IIntroState,
  AbstractIntroStoreAction,
  AbstractIntroReducer
> {
  protected get reducer(): AbstractIntroReducer {
    return new IntroReducer();
  }
}
