import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from './reducers/counter.reducer';
import { increment, decrement, reset } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  template: `
    <h1>Current Count: {{ count }}</h1>
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()">Decrement</button>
    <button (click)="onReset()">Reset</button>
  `,
})
export class AppComponent implements OnDestroy {
  count: number | undefined;
  private countSubscription: Subscription;

  constructor(private store: Store<CounterState>) {
    this.countSubscription = this.store
      .select((state) => state.counter.count)
      .subscribe((count) => {
        this.count = count;
      });
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
