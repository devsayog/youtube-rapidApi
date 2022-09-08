/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

import VideosList from '@/components/VideosList'
import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const {
    data: channelDetail,
    isLoading,
    isError,
  } = useGetChannelDetailsQuery(slug as string)
  const {
    data: channelVideos,
    isLoading: channelVideosLoading,
    isError: channelVideosError,
  } = useGetChannelVideosQuery(slug as string)

  if (isLoading || channelVideosLoading) {
    return <p>Loading . . .</p>
  }
  if (isError || channelVideosError) {
    return <p>OOPS!! Something went wrong !!!</p>
  }
  if (!channelDetail || !channelVideos) {
    return <p>No videos to display</p>
  }
  const { items } = channelDetail
  if (!items[0]) {
    return <p>No channel to display</p>
  }
  const {
    snippet: { title, thumbnails, description },
    statistics: { subscriberCount },
  } = items[0]
  return (
    <section>
      <div className="h-[17vw] bg-purple-600" />
      <div className="mx-auto -mt-10 max-w-sm text-center sm:-mt-20">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="mx-auto mb-2 h-20 w-20 rounded-full sm:h-40 sm:w-40"
        />
        <p className="paragraph-sm text-gray-400">
          {description.slice(0, 180)} ...
        </p>
        <p className="paragraph-sm text-gray-400">
          {parseInt(subscriberCount, 10).toLocaleString()} Subscribers
        </p>
      </div>
      {/* Display channel videos */}
      <h4 className="h4 mt-3 border-b border-gray-800 text-gray-500">Videos</h4>
      <VideosList data={channelVideos} />
    </section>
  )
}

export default Index
