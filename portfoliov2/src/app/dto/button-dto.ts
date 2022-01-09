import { IDto } from "./IDto";

export class ButtonDTO implements IDto {
  public linkId!: string;
  public linkUrl!: string;
}
