import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IDto } from 'src/app/dto/IDto';
import { AbstractAppStoreAction } from './AbstractApp.StoreAction';
import { IState } from './IState';

export abstract class AbstractAppEffect<
  TDto extends IDto,
  TState extends IState<TDto>,
  TAction extends AbstractAppStoreAction<TDto, TState>
> {
  constructor(private type: string, private actions$: Actions) {}

  protected abstract switchMapCallback(): Observable<TDto>;
  protected abstract mapCallback(args: TDto): TAction;

  protected Effect: Observable<TAction> = this.actions$.pipe(
    ofType(this.type),
    switchMap(() => {
      return this.switchMapCallback();
    }),
    map((dto: TDto) => {
      return this.mapCallback(dto);
    })
  );
}
