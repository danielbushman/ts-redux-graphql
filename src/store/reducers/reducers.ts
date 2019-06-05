import { EnthusiasmAction } from "../actions/actions";
import { StoreState } from "../../types/types";
import * as Action from "../actions/actionTypes";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case Action.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + action.by };
    case Action.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - action.by };
    default:
      return state;
  }
}
