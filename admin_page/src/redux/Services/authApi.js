import restaurantApi from "../Service";

const authApi = restaurantApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export default authApi;
export const { useLoginMutation, useCreateUserMutation } = authApi;
