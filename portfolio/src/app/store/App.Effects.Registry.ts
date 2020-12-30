import { aboutEffectsRegistry } from './About/About.Effects.Registry';
import { experienceEffectsRegistry } from './Experience/Experience.Effects.Registry';
import { footerEffectsRegistry } from './Footer/Footer.Effects.Registry';
import { headerEffectsRegistry } from './Header/Header.Effects.Registry';
import { introEffectsRegistry } from './Intro/Intro.Effects.Registry';

export const appEffectsRegistry = [
  ...headerEffectsRegistry,
  ...introEffectsRegistry,
  ...aboutEffectsRegistry,
  ...footerEffectsRegistry,
  ...experienceEffectsRegistry,
];
