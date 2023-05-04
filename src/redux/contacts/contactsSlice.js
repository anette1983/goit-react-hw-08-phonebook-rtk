// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// import {
//   handleFulfilledAdd,
//   handleFulfilledDelete,
//   handleFulfilledFetch,
//   handlePending,
//   handleRejected,
// } from './services';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const thunksArr = [fetchContacts, addContact, deleteContact];
// export const handleStatus = type => thunksArr.map(el => el[type]);

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
//       .addCase(addContact.fulfilled, handleFulfilledAdd)
//       .addCase(deleteContact.fulfilled, handleFulfilledDelete)
//       .addMatcher(isAnyOf(...handleStatus('pending')), handlePending)
//       .addMatcher(isAnyOf(...handleStatus('rejected')), handleRejected);
//   },
// });

// export default contactsSlice.reducer;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // перевірити шлях у стейті
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    // чи потрібні тут хедери? чи вони додаються автоматично, якщо їх додати у аус як раніше?
  }),
  tagTypes: ['user', 'contacts'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: data => ({
        url: '/users/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['user', 'contacts'],
    }),
    loginUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['user', 'contacts'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['user', 'contacts'],
    }),
    refreshUser: builder.query({
      query: () => ({
        url: `/users/current`,
      }),
      providesTags: ['user'],
    }),
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: { ...contact },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserQuery,
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
