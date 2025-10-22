export type ThumbnailQuality = 'default' | 'medium' | 'high' | 'standard' | 'maxres';

export interface ThumbnailInfo {
  url: string;
  quality: ThumbnailQuality;
  width: number;
  height: number;
}

export interface YouTubeVideo {
  id: string;
  thumbnails: ThumbnailInfo[];
  title?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';