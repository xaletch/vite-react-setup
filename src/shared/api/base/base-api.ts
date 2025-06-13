import { getCookie } from "@/shared/lib";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// your api url
const apiUrl = import.meta.env.VITE_API_URL;

export const API = createApi({
  baseQuery: fetchBaseQuery({
    // api url
    baseUrl: apiUrl,

    // add authorization token
    prepareHeaders: (headers) => {
      const authorizationToken: string | null = getCookie("your_authorization_token__cookie_name");

      if (authorizationToken) {
        headers.set("Authorization", `Bearer ${authorizationToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "API",

  // your tag types
  tagTypes: [""],
  endpoints: () => ({}),
});