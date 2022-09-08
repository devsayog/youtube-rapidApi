import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ChannelDetailsType } from '@/types/channelDetailsType'
import type { ChannelVideosType } from '@/types/channelVideosType'
import type { RecommendedVideosType } from '@/types/recommendedVideosType'
import type { SearchType } from '@/types/searchResult'
import type { SearchVideosType } from '@/types/searchVideosType'
import type { VideoDetailsType } from '@/types/videoDetailsType'

const rapidApi = createApi({
  reducerPath: 'rapidApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-v31.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPID_API_KEY!)
      headers.set('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getVideos: builder.query<SearchVideosType, string>({
      query: (q) => `/search?part=snippet&q=${q}&maxResults=50`,
    }),
    getVideoDetails: builder.query<VideoDetailsType, string>({
      query: (id) => `/videos?part=snippet,statistics&id=${id}`,
    }),
    getRecommendedVideos: builder.query<RecommendedVideosType, string>({
      query: (id) => `/search?part=snippet&relatedToVideoId=${id}&type=video`,
    }),
    search: builder.query<SearchType, string>({
      query: (q) => `/search?part=snippet&q=${q}&maxResults=50`,
    }),
    getChannelDetails: builder.query<ChannelDetailsType, string>({
      query: (id) => `channels?part=snippet&id=${id}`,
    }),
    getChannelVideos: builder.query<ChannelVideosType, string>({
      query: (id) =>
        `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
    }),
  }),
})
export const {
  useGetVideosQuery,
  useGetVideoDetailsQuery,
  useGetRecommendedVideosQuery,
  useSearchQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} = rapidApi
export default rapidApi
