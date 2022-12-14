import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import reducer from './reducers';

let middleware = null;

const store = configureStore({
  reducer,
  ...middleware,
});

export const persistor = persistStore(store);

export default store;
