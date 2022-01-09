import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { SkillDTO } from 'src/app/dto/skill-dto';
import { ISkillState } from 'src/app/store/Skill/ISkill.State';
import * as fromApp from '../../store/IApp.State';
import { AbstractProfileComponent } from '../AbstractProfile.Component';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent
  extends AbstractProfileComponent<SkillDTO, ISkillState>
  implements OnInit, OnDestroy {

  constructor(store: Store<fromApp.IAppState>) {
    super(store, 'skillState');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
