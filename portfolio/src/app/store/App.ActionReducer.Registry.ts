import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './IApp.State';
import * as fromHeader from './Header/Reducers/Header.ActionReducer';
import * as fromIntro from './Intro/Reducers/Intro.ActionReducer';
import * as fromFooter from './Footer/Reducers/Footer.ActionReducer';
import * as fromContact from './Contact/Reducers/Contact.ActionReducer';
import * as fromExperience from './Experience/Reducers/Experience.ActionReducer';
import * as fromEducation from './Education/Reducers/Education.ActionReducer';
import * as fromProject from './Project/Reducers/Project.ActionReducer';
import * as fromSkill from './Skill/Reducers/Skill.ActionReducer';
import * as fromCertification from './Certification/Reducers/Certification.ActionReducer';

export const appActionReducerRegistry: ActionReducerMap<IAppState> = {
  headerState: new fromHeader.HeaderActionReducer().actionReducer,
  introState: new fromIntro.IntroActionReducer().actionReducer,
  contactState: new fromContact.ContactActionReducer().actionReducer,
  footerState: new fromFooter.FooterActionReducer().actionReducer,
  experienceState: new fromExperience.ExperienceActionReducer().actionReducer,
  educationState: new fromEducation.EducationActionReducer().actionReducer,
  projectState: new fromProject.ProjectActionReducer().actionReducer,
  skillState: new fromSkill.SkillActionReducer().actionReducer,
  certificationState: new fromCertification.CertificationActionReducer().actionReducer,
};
