import { useState } from 'react';
import { ExternalLink, ListVideo } from 'lucide-react';

interface YouTubePlaylistEmbedProps {
  playlistId: string;
  title: string;
  aspectRatio?: '16:9' | '4:3';
}

export function YouTubePlaylistEmbed({
  playlistId,
  title,
  aspectRatio = '16:9',
}: YouTubePlaylistEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const ratioClass = aspectRatio === '4:3' ? 'aspect-4/3' : 'aspect-video';

  if (!playlistId || hasError) {
    return (
      <div className={`w-full ${ratioClass} rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-neutral-400`}>
        <ListVideo className="w-10 h-10 mb-3 text-neutral-600" />
        <p className="text-sm font-medium text-neutral-300">Playlist embed currently unavailable</p>
        <p className="text-xs text-neutral-500 mt-1 max-w-sm">
          You can access the full structured playlist directly on YouTube.
        </p>
        {playlistId && (
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            Open Playlist on YouTube <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${ratioClass} rounded-xl overflow-hidden bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 text-neutral-300 p-6 text-center z-10">
          <ListVideo className="w-10 h-10 mb-3 text-blue-500" />
          <h4 className="text-sm font-medium text-white mb-1">{title} Playlist</h4>
          <p className="text-xs text-neutral-400 max-w-xs mb-4">
            Official structured YouTube video course playlist.
          </p>
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Load Interactive Course Playlist
          </button>
        </div>
      )}

      {isLoaded && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0`}
          title={`${title} - YouTube Playlist`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
