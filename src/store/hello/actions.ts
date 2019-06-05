import * as Action from './actionTypes';

export interface IIncrementEnthusiasm {
  type: Action.INCREMENT_ENTHUSIASM;
  by: number;
}

export interface IDecrementEnthusiasm {
  type: Action.DECREMENT_ENTHUSIASM;
  by: number;
}

export type IEnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(by: number = 1): IIncrementEnthusiasm {
  return {
    type: Action.INCREMENT_ENTHUSIASM,
    by,
  };
}

export function decrementEnthusiasm(by: number = 1): IDecrementEnthusiasm {
  return {
    type: Action.DECREMENT_ENTHUSIASM,
    by,
  };
}
