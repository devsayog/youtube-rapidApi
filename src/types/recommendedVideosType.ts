import type { Default, Item, PageInfo, Thumbnails } from './searchVideosType'

export interface RecommendedVideosType {
  kind: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}
export interface RecommendedSnippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: RecommendedThumbnails
  channelTitle: string
  liveBroadcastContent: RecommendedLiveBroadcastContent
  publishTime: Date
}
export enum RecommendedLiveBroadcastContent {
  None = 'none',
}
export interface RecommendedThumbnails extends Thumbnails {
  standard?: Default
  maxres?: Default
}
