export interface Playlist {
  pin_code: string;
  id?: string;
  created_at: number;
  created_by: string;
  created_by_id:  string;
  company: string;
  name: string;
  genre: string;
  isEditeable: boolean;
  videos: string[];
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

