import posts from '@/data/blog-posts.json';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
  image?: string;
}

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
}
