import { IDto } from '../dto/IDto';

export interface IState<TDto extends IDto> {
  dto: TDto;
}
