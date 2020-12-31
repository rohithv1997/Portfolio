import * as fromHeader from './Header/IHeader.State';
import * as fromIntro from './Intro/IIntro.State';
import * as fromAbout from './About/IAbout.State';
import * as fromFooter from './Footer/IFooter.State';
import * as fromExperience from './Experience/IExperience.State';
import * as fromEducation from './Education/IEducation.State';
import * as fromProject from './Project/IProject.State';
import * as fromSkill from './Skill/ISkill.State';

export interface IAppState {
  headerState: fromHeader.IHeaderState;
  introState: fromIntro.IIntroState;
  aboutState: fromAbout.IAboutState;
  footerState: fromFooter.IFooterState;
  experienceState: fromExperience.IExperienceState;
  educationState: fromEducation.IEducationState;
  projectState: fromProject.IProjectState;
  skillState: fromSkill.ISkillState;
}
