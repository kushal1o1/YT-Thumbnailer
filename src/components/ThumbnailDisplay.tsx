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
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleDownload = async (thumbnail: ThumbnailInfo, index: number) => {
    setDownloading(index);
    try {
      await downloadImage(thumbnail.url);
      toast.success(`Downloaded ${thumbnail.quality} thumbnail successfully!`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download thumbnail. Please try again.');
    }
    setDownloading(null);
  };

  return (
    <>
      <div className="thumbnail-grid">
        {thumbnails.map((thumbnail, index) => (
          <div 
            key={index} 
            className="thumbnail-card"
            onClick={() => setPreviewIndex(index)}
          >
            <div className="thumbnail-image-container">
              <img 
                src={thumbnail.url} 
                alt={`YouTube thumbnail ${thumbnail.quality}`}
                className="thumbnail-image"
              />
              <div className="thumbnail-overlay">
                <div className="overlay-text">Click to Preview</div>
              </div>
            </div>
      
              <span className="quality-badge">{thumbnail.quality}</span>
              {thumbnail.width && thumbnail.height && (
                <span className="resolution-badge">
                  {thumbnail.width}x{thumbnail.height}
                </span>
              )}

          </div>
        ))}
      </div>

      {previewIndex !== null && (
        <div className="preview-modal" onClick={() => setPreviewIndex(null)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="preview-close" onClick={() => setPreviewIndex(null)}>×</button>
            <img 
              src={thumbnails[previewIndex].url} 
              alt={`Preview ${thumbnails[previewIndex].quality}`}
              className="preview-image"
            />
            <div className="preview-details">
              <div className="preview-info-row">
                <span className="preview-label">Quality:</span>
                <span className="preview-value">{thumbnails[previewIndex].quality}</span>
              </div>
              {thumbnails[previewIndex].width && thumbnails[previewIndex].height && (
                <div className="preview-info-row">
                  <span className="preview-label">Resolution:</span>
                  <span className="preview-value">
                    {thumbnails[previewIndex].width}x{thumbnails[previewIndex].height}
                  </span>
                </div>
              )}
              <button 
                className="preview-download-button"
                onClick={() => handleDownload(thumbnails[previewIndex], previewIndex)}
                disabled={downloading !== null}
              >
                {downloading === previewIndex ? 'Downloading...' : 'Download High Quality'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbnailDisplay;