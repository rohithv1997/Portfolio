import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './IAppState';
import * as fromHeader from './Header/header.reducer';
import * as fromIntro from './Intro/Intro.Reducer';
import * as fromAbout from './About/About.Reducer';

export const appReducer: ActionReducerMap<IAppState> = {
  header: fromHeader.reducer,
  intro: fromIntro.reducer,
  about: fromAbout.aboutReducerMap,
};
