import { createStore } from "redux";
import { enthusiasm } from "./hello/reducers";
import { IStoreState } from "./hello/types";

export const initialState: IStoreState = {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
};

const store = createStore(enthusiasm, initialState);

export default store;
