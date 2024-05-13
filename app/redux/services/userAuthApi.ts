// app/redux/services/userAuthApi.ts
import { apiConfig } from '@/app/api/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserApiResponse, UserInput } from '../../types'; // Import your User and UserInput types

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
  }),

  endpoints: (builder) => ({
    login: builder.mutation<UserApiResponse, UserInput>({
      // Specify the input and output types
      query: (credentials) => ({
        url: `/oauth/${apiConfig.apiVersion}/generate`, // Replace with the actual login endpoint
        method: 'POST',
        body: credentials, // Assuming credentials is an object containing user input
      }),
    }),
  }),
});

export const { useLoginMutation } = userAuthApi;
