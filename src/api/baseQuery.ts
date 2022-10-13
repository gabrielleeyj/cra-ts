import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

const axiosBaseQuery =
  (
      { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig["method"]
      data?: AxiosRequestConfig["data"]
      params?: AxiosRequestConfig["params"]
    },
    unknown,
    unknown
    > =>
      async ({ url, method, data, params }) => {
          try {
              const result = await axios({ url: baseUrl + url, method, data, params });
              return { data: result.data };
          } catch (axiosError) {
              const err = axiosError as AxiosError;
              return {
                  error: {
                      status: err.response?.status,
                      data: err.response?.data || err.message
                  }
              };
          }
      };

const api = createApi({
    baseQuery: axiosBaseQuery({
        baseUrl: "https://example.com"
    }),
    endpoints(build) {
        return {
            query: build.query({ query: () => ({ url: "/query", method: "get" }) }),
            mutation: build.mutation({
                query: () => ({ url: "/mutation", method: "post" })
            })
        };
    }
});

export { api };
