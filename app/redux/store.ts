// app/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import organizationReducer from './features/organizationSlice';
import userReducer from './features/userSlice';
import { organizationAuthApi } from './services/organizationAuthApi';
import { userAuthApi } from './services/userAuthApi';
import thunk from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    organizationReducer,
    userReducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [organizationAuthApi.reducerPath]: organizationAuthApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userAuthApi.middleware, organizationAuthApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
