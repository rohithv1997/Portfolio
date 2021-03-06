import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CertificationDTO } from '../dto/certification-dto';
import { ContactDTO } from '../dto/contact-dto';
import { EducationDTO } from '../dto/education-dto';
import { ExperienceDTO } from '../dto/experience-dto';
import { FooterDTO } from '../dto/footer-dto';
import { HeaderDTO } from '../dto/header-dto';
import { IntroDTO } from '../dto/intro-dto';
import { ProjectDTO } from '../dto/project-dto';
import { SkillDTO } from '../dto/skill-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get Header(): Observable<HeaderDTO> {
    return this.httpClient.get<HeaderDTO>(environment.apiUrlHeaderGet);
  }

  get Intro(): Observable<IntroDTO> {
    return this.httpClient.get<IntroDTO>(environment.apiUrlIntroGet);
  }

  get Contact(): Observable<ContactDTO> {
    return this.httpClient.get<ContactDTO>(environment.apiUrlContactGet);
  }

  get Experience(): Observable<ExperienceDTO> {
    return this.httpClient.get<ExperienceDTO>(environment.apiUrlExperienceGet);
  }

  get Skill(): Observable<SkillDTO> {
    return this.httpClient.get<SkillDTO>(environment.apiUrlSkillGet);
  }

  get Footer(): Observable<FooterDTO> {
    return this.httpClient.get<FooterDTO>(environment.apiUrlFooterGet);
  }

  get Education(): Observable<EducationDTO> {
    return this.httpClient.get<EducationDTO>(environment.apiUrlEducationGet);
  }

  get Project(): Observable<ProjectDTO> {
    return this.httpClient.get<ProjectDTO>(environment.apiUrlProjectGet);
  }

  get Certification(): Observable<CertificationDTO> {
    return this.httpClient.get<CertificationDTO>(environment.apiUrlCertificationGet);
  }
}
