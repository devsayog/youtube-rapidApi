/* eslint-disable @next/next/no-img-element */
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { defaultConstants } from '@/constants/defaultConstants'
import { useSearchQuery } from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useSearchQuery(slug as string)

  if (isLoading) {
    return <p>Loading . . .</p>
  }
  if (isError) {
    return <p>OOPS!! Something went wrong !!!</p>
  }
  if (!data) {
    return <p>No videos to display</p>
  }
  const { items } = data
  return items.map((item, i) => (
    <div key={i} className="p-2">
      {/* CHANNEL CARD */}
      {item.id.channelId && (
        <Link href={`/channel/${item.id.channelId}`}>
          <a key={i} className="searchCard-wrapper">
            <div className="mb-3 w-72 shrink-0 sm:mb-0">
              <img
                className="mx-auto h-52 w-52 rounded-full object-cover"
                src={
                  item.snippet.thumbnails.high.url ||
                  defaultConstants.thumbnailUrl
                }
                alt={item.snippet.title || defaultConstants.channelTitle}
              />
            </div>
            <div>
              <h4 className="h4 flex items-center text-gray-300">
                {item.snippet.channelTitle || defaultConstants.channelTitle}{' '}
                <CheckCircleIcon className="ml-1 text-lg" />{' '}
              </h4>
              <p className="paragraph-sm text-gray-400">
                {item.snippet.description}
              </p>
            </div>
          </a>
        </Link>
      )}
      {/* VIDEOS CARD */}
      {item.id.videoId && (
        <Link href={`/channel/${item.id.videoId}`}>
          <a key={i} className="searchCard-wrapper">
            <img
              className="h-52 w-72 object-cover"
              src={
                item.snippet.thumbnails.high.url ||
                defaultConstants.thumbnailUrl
              }
              alt={item.snippet.title || defaultConstants.channelTitle}
            />
            <div>
              <h4 className="h4 text-gray-300">
                {item.snippet.title || defaultConstants.videoTitle}
              </h4>
              <p className="paragraph-sm  text-gray-500">
                {new Date(item.snippet.publishedAt).toLocaleDateString()}
              </p>
              <Link href={`/channel/${item.snippet.channelId}`}>
                <a className="paragraph mt-2 flex items-center text-gray-400 sm:mt-0">
                  <span className="mr-1.5 h-5 w-5 rounded-full bg-gray-400" />{' '}
                  {item.snippet.channelTitle || defaultConstants.channelTitle}{' '}
                  <CheckCircleIcon className="ml-1 text-lg" />{' '}
                </a>
              </Link>
              <p className="paragraph-sm text-gray-400">
                {item.snippet.description}
              </p>
            </div>
          </a>
        </Link>
      )}
    </div>
  ))
}

export default Index
