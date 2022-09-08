export interface SearchType {
  kind: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

export interface Item {
  kind: ItemKind
  id: ID
  snippet: Snippet
}

export interface ID {
  kind: any
  channelId?: string
  videoId?: string
  playlistId?: string
}

export enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
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

export interface Thumbnails {
  default: Default
  medium: Default
  high: Default
}

export interface Default {
  url: string
  width?: number
  height?: number
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
