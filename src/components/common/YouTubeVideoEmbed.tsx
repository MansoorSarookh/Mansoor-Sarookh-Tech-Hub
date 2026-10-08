import { useState } from 'react';
import { Play, ExternalLink, Video } from 'lucide-react';

interface YouTubeVideoEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  aspectRatio?: '16:9' | '4:3';
  autoPlay?: boolean;
}

export function YouTubeVideoEmbed({
  videoId,
  title,
  thumbnail,
  aspectRatio = '16:9',
  autoPlay = true,
}: YouTubeVideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  // High-res YouTube thumbnail default fallback
  const fallbackThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const displayThumb = thumbnail || fallbackThumb;

  const ratioClass = aspectRatio === '4:3' ? 'aspect-4/3' : 'aspect-video';

  if (!videoId || hasError) {
    return (
      <div className={`w-full ${ratioClass} rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-neutral-400`}>
        <Video className="w-10 h-10 mb-3 text-neutral-600" />
        <p className="text-sm font-medium text-neutral-300">Video player currently unavailable</p>
        <p className="text-xs text-neutral-500 mt-1 max-w-sm">
          You can watch this video lecture directly on Mansoor Sarookh&apos;s YouTube channel.
        </p>
        {videoId && (
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            Open on YouTube <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${ratioClass} rounded-xl overflow-hidden bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm group`}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={displayThumb}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // fallback to generic thumbnail if custom fails
              if (e.currentTarget.src !== fallbackThumb) {
                e.currentTarget.src = fallbackThumb;
              }
            }}
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />

          {/* Center Play Button Facade */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 group-focus:ring-4 group-focus:ring-blue-500/50"
              aria-label={`Play video: ${title}`}
            >
              <Play className="w-7 h-7 fill-white ml-1 text-white" />
            </button>
          </div>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
            <p className="text-white font-medium text-sm sm:text-base line-clamp-1 drop-shadow-sm">
              {title}
            </p>
            <span className="text-xs text-neutral-300 mt-0.5 inline-flex items-center gap-1">
              Click to load lecture player · High Definition
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
