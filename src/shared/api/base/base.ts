import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  baseQuery:  fetchBaseQuery({
    baseUrl: ``, // url api
    prepareHeaders: (headers) => {
        const token = ''; // тут достаешь токен из куков
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  reducerPath: "API",
  tagTypes: [""],
  endpoints: () => ({}),
})