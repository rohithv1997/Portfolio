import { contactEffectsRegistry } from './Contact/Contact.Effects.Registry';
import { experienceEffectsRegistry } from './Experience/Experience.Effects.Registry';
import { footerEffectsRegistry } from './Footer/Footer.Effects.Registry';
import { headerEffectsRegistry } from './Header/Header.Effects.Registry';
import { introEffectsRegistry } from './Intro/Intro.Effects.Registry';
import { educationEffectsRegistry } from './Education/Education.Effects.Registry';
import { projectEffectsRegistry } from './Project/Project.Effects.Registry';
import { skillEffectsRegistry } from './Skill/Skill.Effects.Registry';
import { certificationEffectsRegistry } from './Certification/Certification.Effects.Registry';

export const appEffectsRegistry = [
  ...headerEffectsRegistry,
  ...introEffectsRegistry,
  ...contactEffectsRegistry,
  ...footerEffectsRegistry,
  ...experienceEffectsRegistry,
  ...educationEffectsRegistry,
  ...projectEffectsRegistry,
  ...skillEffectsRegistry,
  ...certificationEffectsRegistry,
];
