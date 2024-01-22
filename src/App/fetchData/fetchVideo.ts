import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchFromRapidapi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://youtube-v31.p.rapidapi.com/" }),
  endpoints: (builder) => ({
    getVideo: builder.query({
      query: (cat) => ({
        url: "search",
        params: {
          q: cat,
          part: "snippet,id",
          maxResults: "50",
          order: "date",
        },
        headers: {
          "X-RapidAPI-Key":
            "f77f2bd5c2msh6f670bce6d05039p17fc33jsnbefcd3774f9e",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),
    getChannelDetail: builder.query({
      query: (channelId: string) => ({
        url: "channels",
        params: {
          part: "snippet,id",
          id: channelId,
        },
        headers: {
          "X-RapidAPI-Key":
            "f77f2bd5c2msh6f670bce6d05039p17fc33jsnbefcd3774f9e",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),
    getChannelVideo: builder.query({
      query: (channelId: string) => ({
        url: "search",
        params: {
          channelId: channelId,
          part: "snippet,id",
          order: "date",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key":
            "f77f2bd5c2msh6f670bce6d05039p17fc33jsnbefcd3774f9e",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),

    getVideoDetail: builder.query({
      query: (videoId: string) => ({
        url: "videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: videoId,
        },
        headers: {
          "X-RapidAPI-Key":
            "f77f2bd5c2msh6f670bce6d05039p17fc33jsnbefcd3774f9e",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),
    getRelatedVideo: builder.query({
      query: (videoId) => ({
        url: "search",
        params: {
          relatedToVideoId: videoId,
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key":
            "f77f2bd5c2msh6f670bce6d05039p17fc33jsnbefcd3774f9e",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const {
  useGetVideoQuery,
  useGetChannelDetailQuery,
  useGetChannelVideoQuery,
  useGetVideoDetailQuery,
  useGetRelatedVideoQuery,
} = fetchFromRapidapi;
