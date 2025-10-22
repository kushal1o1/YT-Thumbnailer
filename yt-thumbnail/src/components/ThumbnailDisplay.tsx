import type { ThumbnailInfo } from '../types/types';
import './ThumbnailDisplay.css';

interface ThumbnailDisplayProps {
  thumbnails: ThumbnailInfo[];
}

const ThumbnailDisplay: React.FC<ThumbnailDisplayProps> = ({ thumbnails }) => {
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
          <button className="download-button">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailDisplay;