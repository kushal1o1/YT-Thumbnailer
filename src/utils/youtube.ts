/**
 * Extracts YouTube video ID from various YouTube URL formats
 */
export const extractYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;

  const patterns = [
    // Regular YouTube URL
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    // YouTube Shorts
    /youtube\.com\/shorts\/([^&\n?#]+)/,
    // YouTube Embed
    /youtube\.com\/embed\/([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Check if an image URL exists
 */
const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

const probeImageSize = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      // fallback to 0x0 if load fails
      resolve({ width: 0, height: 0 });
    };
    img.src = url;
  });
};

/**
 * Generates thumbnail URLs for a given YouTube video ID and checks their availability
 */
export const generateThumbnailUrls = async (videoId: string) => {
  const qualities = [
    { quality: 'maxres', width: 1280, height: 720 },
    { quality: 'sddefault', width: 640, height: 480 },
    { quality: 'hqdefault', width: 480, height: 360 },
    { quality: 'mqdefault', width: 320, height: 180 },
    { quality: 'default', width: 120, height: 90 },
  ] as const;

  const thumbnails = await Promise.all(
    qualities.map(async ({ quality }) => {
      const url = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
      const exists = await checkImageExists(url);

      if (exists) {
        const mappedQuality = quality === 'sddefault' ? 'standard' :
                            quality === 'hqdefault' ? 'high' :
                            quality === 'mqdefault' ? 'medium' :
                            quality === 'maxres' ? 'maxres' : 'default';

        const { width, height } = await probeImageSize(url);

        return {
          url,
          quality: mappedQuality,
          width: width || 0,
          height: height || 0,
        } as const;
      }

      return null;
    })
  );

  return thumbnails.filter((thumbnail): thumbnail is NonNullable<typeof thumbnail> => thumbnail !== null);
};