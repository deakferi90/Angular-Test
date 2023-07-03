import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/counter.actions';
import { CounterState } from '../reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  public counter$!: Observable<number>;

  constructor(private store: Store<CounterState>) {}

  ngOnInit() {
    this.counter$ = this.store.select((state) => state.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
