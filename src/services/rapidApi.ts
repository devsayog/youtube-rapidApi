import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import process from 'process'

import type { SearchVideosType } from '@/types/searchVideosType'

const rapidApi = createApi({
  reducerPath: 'rapidApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-v31.p.rapidapi.com',
    // headers: {
    //   'X-RapidAPI-Key': '9fa36bd5bbmshf10ee0417b19224p1315a5jsnee2ac0d60fdf',
    //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    // },
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
  }),
})
export const { useGetVideosQuery } = rapidApi
export default rapidApi
