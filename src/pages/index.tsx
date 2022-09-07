import VideosList from '@/components/VideosList'
import { useGetVideosQuery } from '@/services/rapidApi'

const Home = () => {
  const { data, isLoading, isError } = useGetVideosQuery('new')

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

export default Home
