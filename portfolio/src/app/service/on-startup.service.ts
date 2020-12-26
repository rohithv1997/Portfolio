import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetHeaderDto } from '../store/Header/Actions/GetHeaderDto';
import * as fromApp from '../store/IAppState';
import { GetIntroDto } from '../store/Intro/Actions/GetIntroDto';

@Injectable({
  providedIn: 'root',
})
export class OnStartupService {
  constructor(private store: Store<fromApp.IAppState>) {}

  public onStartUp(): void {
    this.store.dispatch(new GetHeaderDto());
    this.store.dispatch(new GetIntroDto());
  }
}
