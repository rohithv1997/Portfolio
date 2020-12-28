import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EducationDTO } from '../dto/education-dto';
import { ExperienceDTO } from '../dto/experience-dto';
import { FooterDTO } from '../dto/footer-dto';
import { ProjectDTO } from '../dto/project-dto';
import { SkillsDTO } from '../dto/skills-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getExperience(): Observable<ExperienceDTO> {
    return this.httpClient.get<ExperienceDTO>(environment.apiUrlExperienceGet);
  }

  public getSkill(): Observable<SkillsDTO> {
    return this.httpClient.get<SkillsDTO>(environment.apiUrlSkillGet);
  }

  public getFooter(): Observable<FooterDTO> {
    return this.httpClient.get<FooterDTO>(environment.apiUrlFooterGet);
  }

  public getEducation(): Observable<EducationDTO> {
    return this.httpClient.get<EducationDTO>(environment.apiUrlEducationGet);
  }

  public getProject(): Observable<ProjectDTO> {
    return this.httpClient.get<ProjectDTO>(environment.apiUrlProjectGet);
  }
}
