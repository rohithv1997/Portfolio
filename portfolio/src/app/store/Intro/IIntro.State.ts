import { IntroDTO } from 'src/app/dto/intro-dto';
import { IState } from '../Base/IState';

export interface IIntroState extends IState {
  introDto : IntroDTO
}
