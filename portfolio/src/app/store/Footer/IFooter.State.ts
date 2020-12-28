import { FooterDTO } from 'src/app/dto/footer-dto';
import { IState } from '../Base/IState';

export interface IFooterState extends IState {
  footerDto: FooterDTO;
}
