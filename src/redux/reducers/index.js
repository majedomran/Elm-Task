import {persistCombineReducers} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import weatherReducer from './weatherReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // TODO: persist some data?
  // whitelist: [],
  transforms: [], // TODO: secure some data?
};
const reducers = persistCombineReducers(persistConfig, {
  weather: weatherReducer,
});

// Global common for reducers
export const commonState = {
  loading: false,
  requestSuccess: false,
  requestFailed: false,
  error: null,
};

export default reducers;
