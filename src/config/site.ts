import { Author } from '../types';

export const siteConfig = {
  brand: {
    name: 'Mansoor Sarookh',
    platform: 'Tech Hub',
    tagline: 'Learn. Build. Share Technology.',
    description:
      'A personal technology knowledge platform that brings together technical writing, educational video courses, YouTube playlists, tutorials, projects, and learning resources.',
  },
  author: {
    name: 'Mansoor Sarookh',
    role: 'Software Engineer & Technology Educator',
    bio: 'Passionate about breaking down complex computer science architectures, crafting practical software, and helping learners build real-world systems. Specializing in Web Technologies, Distributed Systems, Software Engineering, and AI/ML Workflows.',
    avatar: '/src/assets/images/mansoor_sarookh_portrait_1791403969623.jpg',
    location: 'Pakistan',
    email: 'mansoorstudentlife@gmail.com',
    philosophy: 'Learn deeply through first principles, build relentlessly by shipping real projects, and share generously with the developer community.',
    teachingApproach: 'Clarity over jargon. Practical system implementations over pure theory. Direct connection between code, concepts, and production outcomes.',
  } as Author,
  socials: {
    youtube: 'https://youtube.com/@MansoorSarookh',
    github: 'https://github.com/mansoorsarookh',
    linkedin: 'https://linkedin.com/in/mansoorsarookh',
    kaggle: 'https://kaggle.com/mansoorsarookh',
    instagram: 'https://instagram.com/mansoorsarookh',
    facebook: 'https://facebook.com/mansoorsarookh',
    email: 'mailto:mansoorstudentlife@gmail.com',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/articles', hasDropdown: true },
    { label: 'Courses', href: '/courses' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ],
  footerLinks: {
    explore: [
      { label: 'Home', href: '/' },
      { label: 'Articles & Tutorials', href: '/articles' },
      { label: 'Courses & Playlists', href: '/courses' },
      { label: 'Video Lectures', href: '/videos' },
      { label: 'Projects & Demos', href: '/projects' },
      { label: 'Learning Resources', href: '/resources' },
    ],
    topics: [
      { label: 'Computer Science', href: '/topics/computer-science' },
      { label: 'Web Development', href: '/topics/web-development' },
      { label: 'Cybersecurity', href: '/topics/cybersecurity' },
      { label: 'Software Engineering', href: '/topics/software-engineering' },
      { label: 'Artificial Intelligence', href: '/topics/artificial-intelligence' },
      { label: 'Distributed Systems', href: '/topics/parallel-distributed-computing' },
    ],
    connect: [
      { label: 'YouTube Channel', href: 'https://youtube.com/@MansoorSarookh', external: true },
      { label: 'GitHub Repositories', href: 'https://github.com/mansoorsarookh', external: true },
      { label: 'LinkedIn Profile', href: 'https://linkedin.com/in/mansoorsarookh', external: true },
      { label: 'Kaggle Notebooks', href: 'https://kaggle.com/mansoorsarookh', external: true },
      { label: 'Contact Mansoor', href: '/connect' },
    ],
  },
};
