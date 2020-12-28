import { aboutEffectsRegistry } from '../About/About.Effects.Registry';
import { footerEffectsRegistry } from '../Footer/Footer.Effects.Registry';
import { headerEffects } from '../Header/header.effects';
import { introEffects } from '../Intro/Intro.Effects';

export const appEffectsRegistry = [
  ...headerEffects,
  ...introEffects,
  ...aboutEffectsRegistry,
  ...footerEffectsRegistry,
];
