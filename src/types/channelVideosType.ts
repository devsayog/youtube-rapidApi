import type { PageInfo, Thumbnails } from './searchVideosType'

export interface ChannelVideosType {
  kind: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

export interface Item {
  kind: string
  id: ID
  snippet: Snippet
}
export interface ID {
  kind: any
  videoId?: string
  playlistId?: string
}
export interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: any
  publishTime: Date
}
