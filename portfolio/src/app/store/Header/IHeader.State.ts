import { HeaderDTO } from 'src/app/dto/header-dto';
import { IState } from '../Base/IState';

export interface IHeaderState extends IState {
  headerDto : HeaderDTO
}
