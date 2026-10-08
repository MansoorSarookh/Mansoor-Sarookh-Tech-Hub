import { useState, useMemo } from 'react';
import { articlesData } from '../data/articles';
import { coursesData } from '../data/courses';
import { videosData } from '../data/videos';
import { projectsData } from '../data/projects';
import { resourcesData } from '../data/resources';
import { topicsData } from '../data/topics';
import { ContentType, SearchResultItem } from '../types';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | ContentType>('all');

  // Unified search corpus
  const allItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // Articles
    articlesData.forEach(art => {
      items.push({
        id: art.id,
        slug: art.slug,
        title: art.title,
        description: art.excerpt,
        type: 'article',
        category: art.category,
        tags: art.tags,
        url: `/articles/${art.slug}`,
      });
    });

    // Courses
    coursesData.forEach(crs => {
      items.push({
        id: crs.id,
        slug: crs.slug,
        title: crs.title,
        description: crs.description,
        type: 'course',
        category: crs.category,
        tags: [crs.difficulty, `${crs.lectureCount} Lectures`],
        url: `/courses/${crs.slug}`,
      });
    });

    // Videos
    videosData.forEach(vid => {
      items.push({
        id: vid.id,
        slug: vid.slug,
        title: vid.title,
        description: vid.description,
        type: 'video',
        category: vid.category,
        tags: [vid.duration, vid.courseTitle || 'Video Lecture'],
        url: `/videos/${vid.slug}`,
      });
    });

    // Projects
    projectsData.forEach(prj => {
      items.push({
        id: prj.id,
        slug: prj.slug,
        title: prj.title,
        description: prj.description,
        type: 'project',
        tags: prj.technologies,
        url: `/projects/${prj.slug}`,
      });
    });

    // Resources
    resourcesData.forEach(res => {
      items.push({
        id: res.id,
        slug: res.slug,
        title: res.title,
        description: res.description,
        type: 'resource',
        category: res.topic,
        tags: res.tags,
        url: `/resources/${res.slug}`,
      });
    });

    // Topics
    topicsData.forEach(top => {
      items.push({
        id: top.id,
        slug: top.slug,
        title: top.title,
        description: top.description,
        type: 'topic',
        category: top.categoryGroup,
        tags: ['Topic', `${top.articleCount || 0} Articles`],
        url: `/topics/${top.slug}`,
      });
    });

    return items;
  }, []);

  const results = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    return allItems.filter(item => {
      // Type match
      if (filterType !== 'all' && item.type !== filterType) {
        return false;
      }
      if (!cleanQuery) return true;

      // Text match across title, description, category, tags
      const matchTitle = item.title.toLowerCase().includes(cleanQuery);
      const matchDesc = item.description.toLowerCase().includes(cleanQuery);
      const matchCategory = item.category?.toLowerCase().includes(cleanQuery);
      const matchTags = item.tags?.some(tag => tag.toLowerCase().includes(cleanQuery));

      return matchTitle || matchDesc || matchCategory || matchTags;
    });
  }, [allItems, query, filterType]);

  const clearQuery = () => {
    setQuery('');
  };

  return {
    query,
    setQuery,
    filterType,
    setFilterType,
    results,
    totalCount: results.length,
    clearQuery,
  };
}
