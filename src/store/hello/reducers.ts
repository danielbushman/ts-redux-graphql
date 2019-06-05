import { Reducer } from 'redux';
import { IStoreState } from '../hello/types';
import * as Action from '../hello/actionTypes';
import { initialState } from '../store';

const enthusiasm: Reducer<IStoreState> = (state: IStoreState = initialState, action) => {
  switch (action.type) {
    case Action.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + action.by };
    case Action.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - action.by };
  }
  return state;
};

export { enthusiasm };
