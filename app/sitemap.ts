import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ryosakaue.com';
  const staticPages = ['', '/lesson', '/profile', '/music', '/concert', '/blog', '/faq', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${base}/post/${encodeURIComponent(post.slug)}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
