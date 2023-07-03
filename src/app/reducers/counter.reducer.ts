import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export interface CounterState {
  counter: any;
  count: number;
}

//export const initialState = 0;

export const initialState: CounterState = {
  count: 0,
  counter: undefined,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, () => initialState)
);
