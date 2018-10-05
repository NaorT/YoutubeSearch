export interface Playlist {
  pin_code: string;
  id?: string;
  created_at: number;
  created_by: string;
  created_by_id: string;
  organization: string;
  name: string;
  genre: string;
  isEditeable: boolean;
  videos: YoutubeSearchResult[];
  listeners: string[];
}

export interface User {
  id: string;
}

export enum LocalStorageKey {
  user = 'user'
}

export enum CollectionName {
  playlist = 'playlist'
}

export interface YoutubeSearchResult {
  contentDetails: YoutubecontentDetails;
  etag: string;
  id: {kind: string; videoId: string;};
  kind: string;
  snippet: YoutubeSnippet;
  statistics: YoutubeStatistics;
}
export interface YoutubeStatistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
export interface YoutubeSnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: { title: string; description: string };
  publishedAt: string;
  tags: string[];
  thumbnails: {
    default: YoutubeThumbnails;
    medium: YoutubeThumbnails;
    high: YoutubeThumbnails;
    standard: YoutubeThumbnails;
    maxres: YoutubeThumbnails;
  };
  title: string;
}

export interface YoutubeThumbnails {
  height: number;
  url: string;
  width: number;
}

export interface YoutubecontentDetails {
  caption: string;
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
  regionRestriction: { allowed: string[] };
}


export type DropEffect = 'move' | 'copy' | 'link' | 'none';
export type EffectAllowed = DropEffect | 'copyMove' | 'copyLink' | 'linkMove' | 'all' ;
