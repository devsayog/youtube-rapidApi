import type { Item, SearchVideosType } from '@/types/searchVideosType'
import type { VideoDetailsType } from '@/types/videoDetailsType'

import VideoCard from './VideoCard'

interface VideosListProps {
  data: SearchVideosType | VideoDetailsType
  recommended?: boolean
}

const VideosList = ({ data, recommended }: VideosListProps) => {
  const classes = recommended ? 'lg:max-w-xs lg:grid-cols-1' : 'xl:grid-cols-4'
  return (
    <section
      className={`mx-auto grid max-w-xs gap-3 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-4 ${classes}`}
    >
      {data.items.map((item, i) => {
        return <VideoCard key={i} video={item as Item} />
      })}
    </section>
  )
}

export default VideosList
