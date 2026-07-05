import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'ブログ',
  description: '坂上諒チェロ教室のブログ。コンサート情報、演奏動画、音楽のことなど。',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Blog</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">ブログ</h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs text-muted">カテゴリ：</span>
          {categories.map((cat) => (
            <span key={cat} className="text-xs border border-warm-border px-3 py-1 text-muted">{cat}</span>
          ))}
        </div>

        <div className="divide-y divide-warm-border">
          {posts.map((post) => (
            <article key={post.slug} className="py-6 group">
              <Link href={`/post/${encodeURIComponent(post.slug)}`} className="flex gap-6 items-start hover:opacity-80 transition-opacity">
                <time className="text-xs text-muted whitespace-nowrap pt-1 w-28 shrink-0">{formatDate(post.date)}</time>
                <div>
                  <span className="text-xs text-brown border border-brown px-2 py-0.5 mr-3">{post.category}</span>
                  <span className="font-sans text-warm-text group-hover:text-brown transition-colors">{post.title}</span>
                  <p className="text-xs text-muted mt-2 line-clamp-2">{post.content.slice(0, 100)}...</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
