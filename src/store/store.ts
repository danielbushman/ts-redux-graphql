import { createStore } from "redux";
import { enthusiasm } from "./reducers/reducers";
import { StoreState } from "../types/types";

export const initialState = {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
};

const store = createStore<StoreState>(enthusiasm, initialState);

export default store;
