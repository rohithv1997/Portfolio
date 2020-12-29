import { HeaderDTO } from 'src/app/dto/header-dto';
import { IState } from '../IState';

export interface IHeaderState extends IState {
  headerDto : HeaderDTO
}
