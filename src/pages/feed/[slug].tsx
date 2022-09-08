import { useRouter } from 'next/router'

import Message from '@/components/Message'
import Spinner from '@/components/Spinner'
import VideosList from '@/components/VideosList'
import { useGetVideosQuery } from '@/services/rapidApi'

const Index = () => {
  const {
    query: { slug },
  } = useRouter()
  const { data, isLoading, isError } = useGetVideosQuery(slug as string)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <Message message="OOPS!! Something went wrong !!!" error />
  }
  if (!data) {
    return <Message message="No videos to display" error />
  }
  return (
    <>
      <VideosList data={data} />
    </>
  )
}

export default Index
