import { PayloadAction } from "@reduxjs/toolkit";
import counterReducer, { increment, decrement, incrementByAmount, CounterState } from "../counterSlice";

describe("counterSlice", () => {
  test("should return the initial state", () => {
    const initialState: CounterState = {
      value: 0,
    };
    expect(counterReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle increment", () => {
    const initialState: CounterState = {
      value: 0,
    };
    const nextState = counterReducer(initialState, increment());
    expect(nextState.value).toEqual(1);
  });

  test("should handle decrement", () => {
    const initialState: CounterState = {
      value: 0,
    };
    const nextState = counterReducer(initialState, decrement());
    expect(nextState.value).toEqual(-1);
  });

  test("should handle incrementByAmount", () => {
    const initialState: CounterState = {
      value: 0,
    };
    const nextState = counterReducer(initialState, incrementByAmount(5));
    expect(nextState.value).toEqual(5);
  });

  test("should generate increment action", () => {
    const expectedAction = {
      type: increment.type,
    };
    expect(increment()).toEqual(expectedAction);
  });

  test("should generate decrement action", () => {
    const expectedAction = {
      type: decrement.type,
    };
    expect(decrement()).toEqual(expectedAction);
  });

  test("should generate incrementByAmount action", () => {
    const expectedAction: PayloadAction<number> = {
      type: incrementByAmount.type,
      payload: 5,
    };
    expect(incrementByAmount(5)).toEqual(expectedAction);
  });
});
