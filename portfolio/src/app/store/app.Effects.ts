import { aboutEffects } from './About/About.Effects';
import { headerEffects } from './Header/header.effects';
import { introEffects } from './Intro/Intro.Effects';
export const appEffects = [...headerEffects, ...introEffects, ...aboutEffects];
