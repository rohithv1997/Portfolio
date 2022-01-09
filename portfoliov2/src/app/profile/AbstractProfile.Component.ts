import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IDto } from '../dto/IDto';
import * as fromApp from '../store/IApp.State';
import { IState } from '../store/IState';

@Directive()
export abstract class AbstractProfileComponent<
  TDto extends IDto,
  TState extends IState<TDto>
> implements OnInit, OnDestroy {
  protected constructor(
    private store: Store<fromApp.IAppState>,
    private state: keyof fromApp.IAppState
  ) {}

  private _data!: TDto;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.store
      .select(this.state)
      .subscribe((storeState) => {
        this._data = ((storeState as unknown) as TState).dto;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public get data(): TDto {
    return this._data;
  }
}
