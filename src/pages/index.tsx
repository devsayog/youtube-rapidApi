import Message from '@/components/Message'
import Meta from '@/components/Meta'
import Spinner from '@/components/Spinner'
import VideosList from '@/components/VideosList'
import { useGetVideosQuery } from '@/services/rapidApi'

const Home = () => {
  const { data, isLoading, isError } = useGetVideosQuery('new')

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
      <Meta title="Youtube" />
      <VideosList data={data} />
    </>
  )
}

export default Home
