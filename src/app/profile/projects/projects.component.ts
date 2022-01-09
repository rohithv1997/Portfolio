import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectDTO } from 'src/app/dto/project-dto';
import { IProjectState } from 'src/app/store/Project/IProject.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IApp.State';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent
  extends AbstractProfileComponent<ProjectDTO, IProjectState>
  implements OnInit, OnDestroy {

  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'projectState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
