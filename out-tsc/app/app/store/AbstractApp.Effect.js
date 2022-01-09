import { ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
export class AbstractAppEffect {
    constructor(type, actions$) {
        this.type = type;
        this.actions$ = actions$;
        this.Effect = this.actions$.pipe(ofType(this.type), switchMap(() => {
            return this.switchMapCallback();
        }), map((dto) => {
            return this.mapCallback(dto);
        }));
    }
}
//# sourceMappingURL=AbstractApp.Effect.js.map