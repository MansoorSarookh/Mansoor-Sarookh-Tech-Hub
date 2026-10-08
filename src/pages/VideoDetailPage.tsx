import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GraduationCap, Clock, ExternalLink, BookOpen } from 'lucide-react';
import { videosData } from '../data/videos';
import { coursesData } from '../data/courses';
import { articlesData } from '../data/articles';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { YouTubeVideoEmbed } from '../components/common/YouTubeVideoEmbed';
import { ShareButtons } from '../components/common/ShareButtons';
import { VideoCard } from '../components/video/VideoCard';
import { ArticleCard } from '../components/article/ArticleCard';

export function VideoDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  // Match either by slug or videoId
  const video = videosData.find((v) => v.slug === slug || v.videoId === slug);

  if (!video) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Video Lecture Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The requested video lecture could not be located.
        </p>
        <Link
          to="/videos"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to video library
        </Link>
      </div>
    );
  }

  // Parent course info
  const parentCourse = video.courseSlug
    ? coursesData.find((c) => c.slug === video.courseSlug)
    : null;

  // Next and previous lectures in same course
  const courseLectures = parentCourse ? parentCourse.lectures : [];
  const currentLectureIndex = courseLectures.findIndex((l) => l.videoId === video.videoId);
  const prevLecture = currentLectureIndex > 0 ? courseLectures[currentLectureIndex - 1] : null;
  const nextLecture =
    currentLectureIndex !== -1 && currentLectureIndex < courseLectures.length - 1
      ? courseLectures[currentLectureIndex + 1]
      : null;

  // Related entities
  const relatedArticlesList = (video.relatedArticles || [])
    .map((artSlug) => articlesData.find((a) => a.slug === artSlug))
    .filter(Boolean);

  const relatedVideosList = (video.relatedVideos || [])
    .map((vidSlug) => videosData.find((v) => v.slug === vidSlug))
    .filter(Boolean);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Videos', href: '/videos' },
          { label: video.title },
        ]}
        className="mb-8"
      />

      {/* Main Video Player Container */}
      <div className="max-w-4xl mx-auto mb-10">
        <YouTubeVideoEmbed
          videoId={video.videoId}
          title={video.title}
          thumbnail={video.thumbnail}
        />
      </div>

      {/* Video Header & Meta */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200/80 dark:border-neutral-800 mb-6">
          <div>
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-2">
              <span className="text-rose-600 dark:text-rose-400 font-semibold">{video.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Clock className="w-3.5 h-3.5" /> {video.duration}
              </span>
              {video.lectureNumber && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Lecture 0{video.lectureNumber}</span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              {video.title}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <ShareButtons title={video.title} />
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Course Context Banner */}
        {parentCourse && (
          <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block uppercase tracking-wider">
                  Part of Course Series
                </span>
                <Link
                  to={`/courses/${parentCourse.slug}`}
                  className="text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {parentCourse.title}
                </Link>
              </div>
            </div>

            <Link
              to={`/courses/${parentCourse.slug}`}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Full Course Playlist →
            </Link>
          </div>
        )}

        {/* Video Description */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 mb-12">
          <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
            Lecture Summary & Technical Notes
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Previous & Next Lecture Navigation */}
        {parentCourse && (prevLecture || nextLecture) && (
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {prevLecture ? (
              <Link
                to={`/videos/${prevLecture.videoId}`}
                className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/80 transition-colors flex flex-col"
              >
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 mb-1">
                  <ArrowLeft className="w-3 h-3" /> Previous Lecture
                </span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                  {prevLecture.title}
                </span>
              </Link>
            ) : <div />}

            {nextLecture ? (
              <Link
                to={`/videos/${nextLecture.videoId}`}
                className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/80 transition-colors flex flex-col sm:items-end text-left sm:text-right"
              >
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 mb-1 sm:justify-end">
                  Next Lecture <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                  {nextLecture.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        )}

        {/* Connected Companion Articles */}
        {relatedArticlesList.length > 0 && (
          <div className="mb-14">
            <h3 className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white mb-6">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Recommended Companion Reading</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticlesList.map((art) => (
                art && <ArticleCard key={art.id} article={art} variant="standard" />
              ))}
            </div>
          </div>
        )}

        {/* Related Videos */}
        {relatedVideosList.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
              More Lectures by Mansoor Sarookh
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVideosList.map((relVid) => (
                relVid && <VideoCard key={relVid.id} video={relVid} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
