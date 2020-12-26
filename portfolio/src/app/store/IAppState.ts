import * as fromHeader from './Header/IHeader.State';
import * as fromIntro from './Intro/IIntro.State';

export interface IAppState {
  header: fromHeader.IHeaderState;
  intro: fromIntro.IIntroState;
}
