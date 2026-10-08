export type ContentType = 'article' | 'course' | 'video' | 'project' | 'resource' | 'topic';

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  philosophy: string;
  teachingApproach: string;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  categoryGroup: 'Computer Science' | 'Engineering' | 'Specialization' | 'Professional';
  articleCount?: number;
  courseCount?: number;
  videoCount?: number;
  projectCount?: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  coverImage?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes
  featured?: boolean;
  relatedArticles?: string[]; // slugs
  relatedVideos?: string[];
  relatedCourses?: string[];
  relatedProjects?: string[];
  relatedResources?: string[];
  tableOfContents?: { id: string; title: string; level: number }[];
}

export interface CourseLecture {
  id: string;
  lectureNumber: number;
  title: string;
  duration: string;
  videoId: string;
  summary: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  platform: 'YouTube';
  playlistId: string;
  instructor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  lectureCount: number;
  totalDuration?: string;
  learningOutcomes: string[];
  lectures: CourseLecture[];
  featured?: boolean;
  relatedArticles?: string[];
  relatedProjects?: string[];
  relatedResources?: string[];
}

export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  videoId: string;
  courseId?: string;
  courseSlug?: string;
  courseTitle?: string;
  lectureNumber?: number;
  category: string;
  duration: string;
  thumbnail: string;
  relatedArticles?: string[];
  relatedVideos?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  screenshots?: string[];
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  relatedArticles?: string[];
  relatedVideos?: string[];
  relatedCourses?: string[];
}

export type ResourceType = 'roadmap' | 'cheatsheet' | 'notes' | 'snippet' | 'tool' | 'template' | 'guide';

export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  skills: string[];
  resourceLinks?: { label: string; url: string; internal?: boolean }[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  topic: string;
  tags: string[];
  downloadUrl?: string;
  externalUrl?: string;
  content?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  roadmapSteps?: RoadmapStep[];
  featured?: boolean;
  relatedArticles?: string[];
  relatedCourses?: string[];
}

export interface SearchResultItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: ContentType;
  category?: string;
  tags?: string[];
  url: string;
}
