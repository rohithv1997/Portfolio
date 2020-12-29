import * as fromHeader from './Header/IHeader.State';
import * as fromIntro from './Intro/IIntro.State';
import * as fromAbout from './About/IAbout.State'
import * as fromFooter from './Footer/IFooter.State';

export interface IAppState {
  headerState: fromHeader.IHeaderState;
  introState: fromIntro.IIntroState;
  aboutState: fromAbout.IAboutState;
  footerState: fromFooter.IFooterState;
}
