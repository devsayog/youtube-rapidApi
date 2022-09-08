import Head from 'next/head'
import { useRouter } from 'next/router'

interface IMetaTypes {
  title?: string
  description?: string
  url?: string
  image?: string
}

const Meta = ({
  title = 'Youtube',
  description = 'Watch and Enjoy all kind of videos',
  url,
  image,
}: IMetaTypes) => {
  const router = useRouter()
  const ogUrl = url ?? router.basePath
  const ogImage = image ?? `${router.basePath}/youtube.png`
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${router.basePath}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${router.basePath}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${router.basePath}/favicon-16x16.png`}
      />
      <title>{title}</title>
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="youtube.com" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
export default Meta
