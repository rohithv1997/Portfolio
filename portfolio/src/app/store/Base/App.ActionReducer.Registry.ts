import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './IApp.State';
import * as fromHeader from '../Header/header.reducer';
import * as fromIntro from '../Intro/Intro.Reducer';
import * as fromFooter from '../Footer/Footer.ActionReducer';
import * as fromAbout from '../About/About.ActionReducer';

export const appActionReducerRegistry: ActionReducerMap<IAppState> = {
  headerState: fromHeader.reducer,
  introState: fromIntro.reducer,
  aboutState: fromAbout.aboutActionReducer,
  footerState: fromFooter.footerActionReducer
};
