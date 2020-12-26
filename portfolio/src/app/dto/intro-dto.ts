import { ButtonDTO } from './button-dto';
import { SocialDTO } from './social-dto';

export class IntroDTO {
    public imageProfileUrl!: string;
    public fullName!:string;
    public buttons!:ButtonDTO[];
    public socials!:SocialDTO[];
}



