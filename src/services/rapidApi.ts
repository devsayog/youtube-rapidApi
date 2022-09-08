import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RecommendedVideosType } from '@/types/recommendedVideosType'
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
  }),
})
export const {
  useGetVideosQuery,
  useGetVideoDetailsQuery,
  useGetRecommendedVideosQuery,
} = rapidApi
export default rapidApi
