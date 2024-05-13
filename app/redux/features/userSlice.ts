// userSlice.ts

import { UserApiResponse } from '@/app/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { userAuthApi } from '../services/userAuthApi';

interface UserState {
  user: null | UserApiResponse; // Assuming User is your user object type
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserApiResponse | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null; // Clear error message when logging out
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userAuthApi.endpoints.login.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
        // console.log(state);
      })
      .addMatcher(userAuthApi.endpoints.login.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addMatcher(userAuthApi.endpoints.login.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred.';
        // console.log(action);
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
