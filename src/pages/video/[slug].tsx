import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

import Message from '@/components/Message'
import Meta from '@/components/Meta'
import Spinner from '@/components/Spinner'
import VideosList from '@/components/VideosList'
import { defaultConstants } from '@/constants/defaultConstants'
import {
  useGetRecommendedVideosQuery,
  useGetVideoDetailsQuery,
} from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetVideoDetailsQuery(slug as string)
  const {
    data: recommendedVideos,
    isLoading: isRecommendedVideosLoading,
    isError: isRecommendedVideosError,
  } = useGetRecommendedVideosQuery(slug as string)
  if (isLoading || isRecommendedVideosLoading) {
    return <Spinner />
  }
  if (isError || isRecommendedVideosError) {
    return <Message message="OOPS!! Something went wrong !!!" error />
  }
  if (!data || !recommendedVideos) {
    return <Message message="No videos to display" error />
  }
  const { items } = data
  if (!items[0]) {
    return <Message message="No videos to display" error />
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = items[0]
  return (
    <>
      <Meta title={`${title} - Youtube`} />
      <section className="flex h-full flex-col  md:space-x-4 lg:flex-row">
        <div className="w-full">
          <div className="h-[40vh] w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${slug}`}
              width="100%"
              height="100%"
              controls
            />
          </div>
          <h4 className="h4 mt-3">{title}</h4>
          <div className="mt-4 flex justify-between">
            <Link
              href={
                channelId
                  ? `/channel/${channelId}`
                  : defaultConstants.channelUrl
              }
            >
              <a
                className="flex items-center space-x-3"
                title={channelTitle || defaultConstants.channelTitle}
              >
                <div className="h-12 w-12 rounded-full bg-gray-400" />
                <p className="paragraph font-medium">
                  {channelTitle || defaultConstants.channelTitle}
                </p>
                <CheckCircleIcon className="text-lg " />
              </a>
            </Link>
            <div>
              <p className="paragraph-sm flex items-center text-gray-400">
                <ThumbUpIcon className="mr-1.5" />
                {parseInt(likeCount, 10).toLocaleString()}
              </p>
              <p className="paragraph-sm flex items-center text-gray-400">
                <VisibilityIcon className="mr-1.5" />
                {parseInt(viewCount, 10).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        {/* Display recommended videos */}
        <div>
          <h4 className="h4 my-3">Recommended videos</h4>
          <VideosList recommended data={recommendedVideos} />
        </div>
      </section>
    </>
  )
}

export default Index
