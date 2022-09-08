/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

import Message from '@/components/Message'
import Spinner from '@/components/Spinner'
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
    return <Spinner />
  }
  if (isError || channelVideosError) {
    return <Message message="OOPS!! Something went wrong !!!" error />
  }
  if (!channelDetail || !channelVideos) {
    return <Message message="No videos to display" error />
  }
  const { items } = channelDetail
  if (!items[0]) {
    return <Message message="No channel to display" error />
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
