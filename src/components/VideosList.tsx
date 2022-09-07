import type { SearchVideosType } from '@/types/searchVideosType'

import VideoCard from './VideoCard'

interface VideosListProps {
  data: SearchVideosType
}

const VideosList = ({ data }: VideosListProps) => {
  return (
    <section className="mx-auto grid max-w-xs gap-3 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
      {data.items.map((item, i) => {
        return (
          <div key={i}>
            <VideoCard video={item} />
          </div>
        )
      })}
    </section>
  )
}

export default VideosList
