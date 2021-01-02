import * as fromHeader from './Header/IHeader.State';
import * as fromIntro from './Intro/IIntro.State';
import * as fromContact from './Contact/IContact.State';
import * as fromFooter from './Footer/IFooter.State';
import * as fromExperience from './Experience/IExperience.State';
import * as fromEducation from './Education/IEducation.State';
import * as fromProject from './Project/IProject.State';
import * as fromSkill from './Skill/ISkill.State';
import * as fromCertification from './Certification/ICertification.State';

export interface IAppState {
  headerState: fromHeader.IHeaderState;
  introState: fromIntro.IIntroState;
  contactState: fromContact.IContactState;
  footerState: fromFooter.IFooterState;
  experienceState: fromExperience.IExperienceState;
  educationState: fromEducation.IEducationState;
  projectState: fromProject.IProjectState;
  skillState: fromSkill.ISkillState;
  certificationState: fromCertification.ICertificationState;
}
