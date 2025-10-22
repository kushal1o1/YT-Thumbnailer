import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { LoadingState } from '../types/types';
import './URLInput.css';

const URLInput: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [status, setStatus] = useState<LoadingState>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setStatus('idle');
  };

  return (
    <div className="url-input-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Paste YouTube URL here..."
          className="url-input"
        />
        <button 
          className={`fetch-button ${status === 'loading' ? 'loading' : ''}`}
          disabled={status === 'loading' || !url}
        >
          {status === 'loading' ? 'Loading...' : 'Get Thumbnail'}
        </button>
      </div>
    </div>
  );
};

export default URLInput;