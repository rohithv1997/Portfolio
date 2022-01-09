import { ContactDTO } from 'src/app/dto/contact-dto';
import { IState } from '../IState';

export interface IContactState extends IState<ContactDTO> {}
