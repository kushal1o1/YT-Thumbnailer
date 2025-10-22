export interface ThumbnailInfo {
  url: string;
  quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres';
  width?: number;
  height?: number;
}

export interface YouTubeVideo {
  id: string;
  thumbnails: ThumbnailInfo[];
  title?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';