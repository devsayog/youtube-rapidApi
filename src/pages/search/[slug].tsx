import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Message from '@/components/Message'
import Meta from '@/components/Meta'
import Spinner from '@/components/Spinner'
import { defaultConstants } from '@/constants/defaultConstants'
import { useSearchQuery } from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useSearchQuery(slug as string)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <Message message="OOPS!! Something went wrong !!!" error />
  }
  if (!data) {
    return <Message message="No videos to display" error />
  }
  const { items } = data
  return (
    <>
      <Meta title={`${slug} - Youtube`} />
      {items.map((item, i) => (
        <div key={i} className="overflow-y-hidden p-2">
          {/* CHANNEL CARD */}
          {item.id.channelId && (
            <Link href={`/channel/${item.id.channelId}`}>
              <a key={i} className="searchCard-wrapper">
                <div className="mb-3 sm:mb-0 sm:w-72 sm:shrink-0">
                  <div className="mx-auto h-44 w-44 rounded-full">
                    <Image
                      layout="intrinsic"
                      height={176}
                      width={176}
                      className="rounded-full object-cover"
                      src={
                        item.snippet.thumbnails.high.url ||
                        defaultConstants.thumbnailUrl
                      }
                      alt={item.snippet.title || defaultConstants.channelTitle}
                    />
                  </div>
                </div>
                <div className="sm:pl-3">
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
            <div className="searchCard-wrapper">
              <Link href={`/video/${item.id.videoId}`}>
                <a key={i}>
                  <Image
                    layout="intrinsic"
                    height={176}
                    width={288}
                    className="object-cover"
                    src={
                      item.snippet.thumbnails.high.url ||
                      defaultConstants.thumbnailUrl
                    }
                    alt={item.snippet.title || defaultConstants.channelTitle}
                  />
                </a>
              </Link>
              <div className="space-y-2 sm:pl-3">
                <Link href={`/video/${item.id.videoId}`}>
                  <a>
                    <p className="paragraph font-bold text-gray-300">
                      {item.snippet.title || defaultConstants.videoTitle}
                    </p>
                    <p className="paragraph-sm text-gray-500">
                      {new Date(item.snippet.publishedAt).toLocaleDateString()}
                    </p>
                  </a>
                </Link>
                <Link href={`/channel/${item.snippet.channelId}`}>
                  <a className="paragraph-sm flex items-center text-gray-400 sm:mt-0">
                    <span className="mr-1.5 h-5 w-5 rounded-full bg-gray-400" />{' '}
                    {item.snippet.channelTitle || defaultConstants.channelTitle}{' '}
                    <CheckCircleIcon className="ml-1 text-lg" />{' '}
                  </a>
                </Link>
                <Link href={`/video/${item.id.videoId}`}>
                  <a className="paragraph-sm text-gray-400">
                    {item.snippet.description}
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default Index
