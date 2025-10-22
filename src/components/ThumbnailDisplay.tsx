import { useState } from 'react';
import type { ThumbnailInfo } from '../types/types';
import { downloadImage } from '../utils/download';
import toast from 'react-hot-toast';
import './ThumbnailDisplay.css';

interface ThumbnailDisplayProps {
  thumbnails: ThumbnailInfo[];
}

const ThumbnailDisplay: React.FC<ThumbnailDisplayProps> = ({ thumbnails }) => {
  const [downloading, setDownloading] = useState<number | null>(null);

  const handleDownload = async (thumbnail: ThumbnailInfo, index: number) => {
    setDownloading(index);
    try {
      await downloadImage(thumbnail.url, thumbnail.quality);
      toast.success(`Downloaded ${thumbnail.quality} thumbnail successfully!`);
    } catch (error) {
      toast.error('Failed to download thumbnail. Please try again.');
    }
    setDownloading(null);
  };

  return (
    <div className="thumbnail-grid">
      {thumbnails.map((thumbnail, index) => (
        <div key={index} className="thumbnail-card">
          <div className="thumbnail-image-container">
            <img 
              src={thumbnail.url} 
              alt={`YouTube thumbnail ${thumbnail.quality}`}
              className="thumbnail-image"
            />
          </div>
          <div className="thumbnail-info">
            <span className="quality-badge">{thumbnail.quality}</span>
            {thumbnail.width && thumbnail.height && (
              <span className="resolution-badge">
                {thumbnail.width}x{thumbnail.height}
              </span>
            )}
          </div>
          <button 
            className={`download-button ${downloading === index ? 'downloading' : ''}`}
            onClick={() => handleDownload(thumbnail, index)}
            disabled={downloading !== null}
          >
            {downloading === index ? 'Downloading...' : 'Download'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailDisplay;