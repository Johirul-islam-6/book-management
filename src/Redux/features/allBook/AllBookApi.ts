/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { api } from "../../api/apiSlice";

const AllBookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/booklist',
    }),
    singleBook: builder.query({
      query: (id) => `/booklist/${id}`,
    }),
    
    postBook: builder.mutation({

      query: ({ data }) => ({
        url: `/booklist/add-book`,
        method: 'POST',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
      invalidatesTags: ['allBook'],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ['comments'],
    // }),
  }),
});

export const {
//   useGetCommentQuery,
  useGetAllBooksQuery,
  usePostBookMutation,
  useSingleBookQuery,
} = AllBookApi;