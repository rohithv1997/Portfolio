import { AboutDTO } from 'src/app/dto/about-dto';
import { IState } from '../Base/IState';

export interface IAboutState extends IState {
  aboutDto: AboutDTO
}
