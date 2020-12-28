import { IDto } from "./IDto";

export class AboutDTO implements IDto {
  public dateOfBirthTitle!: string;
  public dateOfBirthValue!: string;
  public emailTitle!: string;
  public emailValue!: string;
  public phoneTitle!: string;
  public phoneValue!: string;
  public addressTitle!: string;
  public addressValue!: string;
  public languageTitle!: string;
  public languageValue!: string;
}
