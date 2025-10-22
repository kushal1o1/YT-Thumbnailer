import { useState } from 'react';
import type { ThumbnailInfo } from './types/types';
import URLInput from './components/URLInput';
import ThumbnailDisplay from './components/ThumbnailDisplay';
import './App.css';

function App() {
  const [thumbnails, setThumbnails] = useState<ThumbnailInfo[]>([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>YouTube Thumbnail Downloader</h1>
        <p>Download high-quality thumbnails from any YouTube video</p>
      </header>
      <main className="app-main">
        <URLInput />
        {thumbnails.length > 0 && <ThumbnailDisplay thumbnails={thumbnails} />}
      </main>
    </div>
  )
}

export default App
