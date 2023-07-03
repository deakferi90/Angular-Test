// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map } from 'rxjs/operators';
// import { increment } from '../actions/counter.actions';

// @Injectable()
// export class CounterEffects {
//   increment$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType('[SomeOtherModule] SomeAction'),
//       map(() => increment())
//     )
//   );

//   constructor(private actions$: Actions) {}
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { increment, decrement } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
  increment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment),
        tap(() => {
          // You can perform additional side effects here if needed
          console.log('Increment action dispatched');
        })
      ),
    { dispatch: false }
  );

  decrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(decrement),
        tap(() => {
          // You can perform additional side effects here if needed
          console.log('Decrement action dispatched');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
