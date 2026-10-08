import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';
import { coursesData } from '../../data/courses';
import { CourseCard } from '../course/CourseCard';

export function FeaturedCoursesSection() {
  const featuredCourses = coursesData.filter((c) => c.featured);

  return (
    <section className="py-16 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400">
              <Youtube className="w-4 h-4" />
              <span>Structured YouTube Courses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              Curated Video Course Series
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View all courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
