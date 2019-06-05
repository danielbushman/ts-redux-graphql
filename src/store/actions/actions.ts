import * as Action from "./actionTypes";

export interface IncrementEnthusiasm {
  type: Action.INCREMENT_ENTHUSIASM;
  by: number;
}

export interface DecrementEnthusiasm {
  type: Action.DECREMENT_ENTHUSIASM;
  by: number;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(by: number = 1): IncrementEnthusiasm {
  return {
    type: Action.INCREMENT_ENTHUSIASM,
    by
  };
}

export function decrementEnthusiasm(by: number = 1): DecrementEnthusiasm {
  return {
    type: Action.DECREMENT_ENTHUSIASM,
    by
  };
}
