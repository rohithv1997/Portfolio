import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './IApp.State';
import * as fromHeader from './Header/Reducers/Header.ActionReducer';
import * as fromIntro from './Intro/Reducers/Intro.ActionReducer';
import * as fromFooter from './Footer/Reducers/Footer.ActionReducer';
import * as fromAbout from './About/Reducers/About.ActionReducer';

export const appActionReducerRegistry: ActionReducerMap<IAppState> = {
  headerState: new fromHeader.HeaderActionReducer().actionReducer,
  introState: new fromIntro.IntroActionReducer().actionReducer,
  aboutState: new fromAbout.AboutActionReducer().actionReducer,
  footerState: new fromFooter.FooterActionReducer().actionReducer,
};
