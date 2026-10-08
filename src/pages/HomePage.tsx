import { HeroSection } from '../components/home/HeroSection';
import { FeaturedEditorial } from '../components/home/FeaturedEditorial';
import { TopicGrid } from '../components/home/TopicGrid';
import { LatestArticlesSection } from '../components/home/LatestArticlesSection';
import { FeaturedCoursesSection } from '../components/home/FeaturedCoursesSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { LearningResourcesSection } from '../components/home/LearningResourcesSection';
import { AboutAuthorPreview } from '../components/home/AboutAuthorPreview';
import { ConnectSection } from '../components/home/ConnectSection';

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Featured Content / Editorial Composition */}
      <FeaturedEditorial />

      {/* 3. Explore Topics */}
      <TopicGrid />

      {/* 4. Latest Articles */}
      <LatestArticlesSection />

      {/* 5. Video Courses */}
      <FeaturedCoursesSection />

      {/* 6. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 7. Learning Resources */}
      <LearningResourcesSection />

      {/* 8. About Mansoor */}
      <AboutAuthorPreview />

      {/* 9. Connect */}
      <ConnectSection />
    </div>
  );
}
