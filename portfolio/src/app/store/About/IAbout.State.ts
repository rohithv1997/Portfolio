import { AboutDTO } from 'src/app/dto/about-dto';
import { IState } from '../IState';

export interface IAboutState extends IState {
  aboutDto: AboutDTO
}
