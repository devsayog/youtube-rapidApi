import { useRouter } from 'next/router'

import VideosList from '@/components/VideosList'
import { useGetVideosQuery } from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetVideosQuery(slug as string)

  if (isLoading) {
    return <p>Loading . . .</p>
  }
  if (isError) {
    return <p>OOPS!! Something went wrong !!!</p>
  }
  if (!data) {
    return <p>No videos to display</p>
  }
  return (
    <>
      <VideosList data={data} />
    </>
  )
}

export default Index
