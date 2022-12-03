import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {SkillDTO} from 'src/app/dto/skill-dto';
import {ApiService} from 'src/app/service/api.service';
import {AbstractSkillEffect} from '../AbstractSkill.Effect';
import {SetSkillAction} from '../Actions/SetSkill.Action';
import {SkillActionNames} from '../SkillActionNames';

@Injectable()
export class GetSkillEffect extends AbstractSkillEffect<SetSkillAction> {
  constructor(actions$: Actions, private apiService: ApiService) {
    super(SkillActionNames.GET_SKILL, actions$);
  }

  protected switchMapCallback(): Observable<SkillDTO> {
    return this.apiService.Skill;
  }

  protected mapCallback(args: SkillDTO): SetSkillAction {
    return new SetSkillAction(args);
  }

  public getSkillEffect: Observable<SetSkillAction> = createEffect(() => this.Effect);
}
