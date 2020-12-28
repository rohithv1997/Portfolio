import * as fromHeader from './Header/IHeader.State';
import * as fromIntro from './Intro/IIntro.State';
import * as fromAbout from './About/IAbout.State'

export interface IAppState {
  header: fromHeader.IHeaderState;
  intro: fromIntro.IIntroState;
  about: fromAbout.IAboutState;
}
