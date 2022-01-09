import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProjectDTO } from 'src/app/dto/project-dto';
import { ApiService } from 'src/app/service/api.service';
import { AbstractProjectEffect } from '../AbstractProject.Effect';
import { SetProjectAction } from '../Actions/SetProject.Action';
import { ProjectActionNames } from '../ProjectActionNames';

@Injectable()
export class GetProjectEffect extends AbstractProjectEffect<SetProjectAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(ProjectActionNames.GET_PROJECT, actions$);
  }

  protected switchMapCallback(): Observable<ProjectDTO> {
    return this.apiService.Project;
  }

  protected mapCallback(args: ProjectDTO): SetProjectAction {
    return new SetProjectAction(args);
  }

  @Effect()
  public getProjectEffect: Observable<SetProjectAction> = this.Effect;
}
