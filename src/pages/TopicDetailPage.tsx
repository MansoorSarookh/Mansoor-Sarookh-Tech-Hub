import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, GraduationCap, Video, FolderGit2, FileText } from 'lucide-react';
import { topicsData } from '../data/topics';
import { articlesData } from '../data/articles';
import { coursesData } from '../data/courses';
import { videosData } from '../data/videos';
import { projectsData } from '../data/projects';
import { resourcesData } from '../data/resources';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/article/ArticleCard';
import { CourseCard } from '../components/course/CourseCard';
import { VideoCard } from '../components/video/VideoCard';
import { ProjectCard } from '../components/project/ProjectCard';
import { ResourceCard } from '../components/resource/ResourceCard';

export function TopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = topicsData.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Topic Not Found
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          The requested topic taxonomy could not be located.
        </p>
        <Link
          to="/topics"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all topics
        </Link>
      </div>
    );
  }

  // Filter content matching this topic
  const matchingArticles = articlesData.filter(
    (art) =>
      art.category.toLowerCase().includes(topic.title.toLowerCase()) ||
      topic.title.toLowerCase().includes(art.category.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(topic.title.toLowerCase()))
  );

  const matchingCourses = coursesData.filter(
    (crs) =>
      crs.category.toLowerCase().includes(topic.title.toLowerCase()) ||
      topic.title.toLowerCase().includes(crs.category.toLowerCase()) ||
      crs.title.toLowerCase().includes(topic.title.toLowerCase())
  );

  const matchingVideos = videosData.filter(
    (vid) =>
      vid.category.toLowerCase().includes(topic.title.toLowerCase()) ||
      topic.title.toLowerCase().includes(vid.category.toLowerCase())
  );

  const matchingProjects = projectsData.filter(
    (prj) =>
      prj.technologies.some((t) => topic.title.toLowerCase().includes(t.toLowerCase())) ||
      prj.description.toLowerCase().includes(topic.title.toLowerCase())
  );

  const matchingResources = resourcesData.filter(
    (res) =>
      res.topic.toLowerCase().includes(topic.title.toLowerCase()) ||
      topic.title.toLowerCase().includes(res.topic.toLowerCase())
  );

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Topics', href: '/topics' },
          { label: topic.title },
        ]}
        className="mb-8"
      />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
          Topic Knowledge Hub · {topic.categoryGroup}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mt-1 mb-4">
          {topic.title}
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {topic.description}
        </p>
      </div>

      {/* Aggregated Sections */}
      <div className="space-y-16">
        {/* 1. Courses */}
        {matchingCourses.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Structured Courses ({matchingCourses.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* 2. Articles */}
        {matchingArticles.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Articles & Written Guides ({matchingArticles.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
          </section>
        )}

        {/* 3. Videos */}
        {matchingVideos.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Video className="w-5 h-5 text-rose-500" />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Video Lectures ({matchingVideos.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {matchingVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}

        {/* 4. Projects */}
        {matchingProjects.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FolderGit2 className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Practical Projects ({matchingProjects.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* 5. Resources */}
        {matchingResources.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Learning Resources & Roadmaps ({matchingResources.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
