import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { LoadingState, ThumbnailInfo } from '../types/types';
import { extractYouTubeVideoId, generateThumbnailUrls } from '../utils/youtube';
import toast from 'react-hot-toast';
import './URLInput.css';

interface URLInputProps {
  onThumbnailsFetched: (thumbnails: ThumbnailInfo[]) => void;
}

const URLInput: React.FC<URLInputProps> = ({ onThumbnailsFetched }) => {
  const [url, setUrl] = useState<string>('');
  const [status, setStatus] = useState<LoadingState>('idle');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setStatus('idle');
    setError('');
  };

  const handleFetchThumbnails = async () => {
    setStatus('loading');
    setError('');

    const videoId = extractYouTubeVideoId(url);
    if (!videoId) {
      const errorMsg = 'Invalid YouTube URL. Please check the URL and try again.';
      setError(errorMsg);
      toast.error(errorMsg);
      setStatus('error');
      return;
    }

    try {
      const thumbnails = await generateThumbnailUrls(videoId);
      if (thumbnails.length === 0) {
        throw new Error('No thumbnails found for this video.');
      }
      onThumbnailsFetched(thumbnails);
      setStatus('success');
      toast.success('Thumbnails loaded successfully!');
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to fetch thumbnails. Please try again.';
      setError(errorMsg);
      toast.error(errorMsg);
      setStatus('error');
    }
  };

  return (
    <div className="url-input-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Paste YouTube URL here..."
          className={`url-input ${error ? 'error' : ''}`}
        />
        <button 
          className={`fetch-button ${status === 'loading' ? 'loading' : ''}`}
          disabled={status === 'loading' || !url}
          onClick={handleFetchThumbnails}
        >
          {status === 'loading' ? 'Loading...' : 'Get Thumbnail'}
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default URLInput;