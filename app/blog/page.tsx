import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'ニュース',
  description: 'チェリスト坂上諒の最新情報。名古屋・愛知県でのコンサート演奏会情報、チェロ演奏動画など。坂上諒チェロ教室からのお知らせも掲載。',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">News</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">ニュース</h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs text-muted">カテゴリ：</span>
          {categories.map((cat) => (
            <span key={cat} className="text-xs border border-warm-border px-3 py-1 text-muted">{cat}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group border border-warm-border hover:shadow-md transition-shadow">
              <Link href={`/post/${encodeURIComponent(post.slug)}`}>
                {post.image && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <time className="text-xs text-muted">{formatDate(post.date)}</time>
                    <span className="text-xs text-brown border border-brown px-2 py-0.5">{post.category}</span>
                  </div>
                  <h2 className="font-serif text-lg text-warm-text group-hover:text-brown transition-colors mb-2">{post.title}</h2>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">{post.content.split('\n')[0]}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
