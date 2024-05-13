import { apiConfig } from '@/app/api/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrganizationResponse } from './../../types/organization.dt';

export const organizationAuthApi = createApi({
  reducerPath: 'organizationAuthApi',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
  }),

  endpoints: (builder) => ({
    validateOrganization: builder.mutation({
      query: (organization) => ({
        url: `/organization/${organization}/${apiConfig.apiVersion}/validate`,
        method: 'GET',
      }),
      transformResponse(response: OrganizationResponse) {
        if (response.StatusCode === 200) {
          if (response) {
            const { name, logo, username } = response.Data;
            return {
              name,
              logoUrl: logo,
              username,
            };
          }
        } else {
          return null;
        }
      },
    }),
  }),
});

export const { useValidateOrganizationMutation } = organizationAuthApi;
