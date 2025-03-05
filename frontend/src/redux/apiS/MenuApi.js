import rastorantApi from "../Service";  

const MenuApi = rastorantApi.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => "/menu/getAllMenu",  
      providesTags: ["Menu"],
    }),
  }),
});

export const { useGetMenuQuery } = MenuApi; 
export default MenuApi;
