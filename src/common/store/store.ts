import {configureStore} from '@reduxjs/toolkit';
import {homeScreenReducers} from '../../screens/homeScreen/homeScreenSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
