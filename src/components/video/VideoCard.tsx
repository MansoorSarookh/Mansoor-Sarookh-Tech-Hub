import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { Video } from '../../types';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const fallbackThumb = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const thumbUrl = video.thumbnail || fallbackThumb;

  return (
    <article className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 overflow-hidden shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col h-full">
      <div className="aspect-16/9 w-full overflow-hidden bg-neutral-900 relative">
        <img
          src={thumbUrl}
          alt={video.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-xs text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-1.5 py-0.5 rounded tabular-nums">
          {video.duration}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5 font-medium">
            <span>{video.category}</span>
            {video.courseTitle && (
              <>
                <span aria-hidden="true">·</span>
                <span className="truncate max-w-[140px]">{video.courseTitle}</span>
              </>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug mb-2">
            <Link to={`/videos/${video.slug}`}>{video.title}</Link>
          </h3>

          <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-3">
            {video.description}
          </p>
        </div>

        <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-mono text-[11px] flex items-center gap-1 tabular-nums">
            <Clock className="w-3 h-3" /> {video.duration}
          </span>
          <Link
            to={`/videos/${video.slug}`}
            className="font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
          >
            Watch Video
          </Link>
        </div>
      </div>
    </article>
  );
}
