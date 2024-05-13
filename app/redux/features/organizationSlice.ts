// organizationSlice.ts

import { Organization } from '@/app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { organizationAuthApi } from '../services/organizationAuthApi';

interface OrganizationState {
  organization: null | Organization;
  isLoading: boolean;
  error: string | null;
}

const initialState: OrganizationState = {
  organization: null,
  isLoading: false,
  error: null,
};

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrganization: (state, action: PayloadAction<Organization | null>) => {
      state.organization = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(organizationAuthApi.endpoints.validateOrganization.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
        // console.log(state);
      })
      .addMatcher(organizationAuthApi.endpoints.validateOrganization.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.organization = action.payload || null;
      })
      .addMatcher(organizationAuthApi.endpoints.validateOrganization.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred.';
        // console.log(action);
      });
  },
});

export const { setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
