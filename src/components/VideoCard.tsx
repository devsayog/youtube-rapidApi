/* eslint-disable @next/next/no-img-element */
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Link from 'next/link'

import { defaultConstants } from '@/constants/defaultConstants'
import type { Item } from '@/types/searchVideosType'

interface IVideoCardProps {
  video: Item
}
const VideoCard = ({ video }: IVideoCardProps) => {
  const {
    id: { videoId },
    snippet,
  } = video
  return (
    <div className="flex flex-col">
      <Link href={videoId ? `/video/${videoId}` : defaultConstants.videoUrl}>
        <a className="space-y-2">
          <img
            alt="name"
            src={snippet.thumbnails.high.url}
            className="h-44 w-full object-cover"
          />
        </a>
      </Link>
      <div className="grid grid-cols-[auto,1fr] gap-x-2">
        <Link
          href={
            snippet.channelId
              ? `/channel/${snippet.channelId}`
              : defaultConstants.channelUrl
          }
        >
          <a
            className="col-start-1 row-span-3 h-9 w-9 rounded-full bg-gray-400"
            title={snippet.channelTitle || defaultConstants.channelTitle}
          >
            <p className="sr-only">
              {snippet.channelTitle || defaultConstants.channelTitle}
            </p>
          </a>
        </Link>
        <Link href={videoId ? `/video/${videoId}` : defaultConstants.videoUrl}>
          <a className="paragraph">
            {snippet.title.slice(0, 60) ||
              defaultConstants.videoTitle.slice(0, 60)}
          </a>
        </Link>

        <Link
          href={
            snippet.channelId
              ? `/channel/${snippet.channelId}`
              : defaultConstants.channelUrl
          }
        >
          <a
            className="paragraph flex items-center font-light text-gray-300"
            title={snippet.channelTitle || defaultConstants.channelTitle}
          >
            {snippet.channelTitle || defaultConstants.channelTitle}{' '}
            <CheckCircleIcon className="ml-2 text-lg " />
          </a>
        </Link>
        <Link href={videoId ? `/video/${videoId}` : defaultConstants.videoUrl}>
          <a className="paragraph-sm  text-gray-400">
            {new Date(snippet.publishedAt).toLocaleDateString()}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard
