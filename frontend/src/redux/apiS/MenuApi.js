import rastorantApi from "../Service";

const MenuApi = rastorantApi.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => ({
        url: "/menu/getAllMenu",
        method: "GET",
      }),
      providesTags: ["Menu"],
    }),
  }),
});
export const { useGetMenuQuery } = MenuApi;
export default MenuApi;
