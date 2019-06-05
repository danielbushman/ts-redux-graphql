import { createStore } from 'redux';
import { enthusiasm } from './hello/reducers';
import { IStoreState } from './hello/types';
import { IEnthusiasmAction } from './hello/actions';

export const initialState: IStoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

const store = createStore<IStoreState, IEnthusiasmAction, null, null>(enthusiasm, initialState);

export default store;
