import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: encodeURIComponent(p.slug) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 120),
  };
}

export default function PostPage({ params }: Props) {
  const slug = decodeURIComponent(params.slug);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-warm-text text-cream py-16 text-center">
        <p className="text-xs text-cream/60 tracking-widest mb-3">{post.category}</p>
        <h1 className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto px-4">{post.title}</h1>
        <p className="mt-4 text-sm text-cream/70">{formatDate(post.date)}</p>
      </section>

      {post.image && (
        <div className="max-w-sm mx-auto mt-8 px-4">
          {post.pdf ? (
            <a href={post.pdf} target="_blank" rel="noopener noreferrer" className="block group">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={849}
                className="w-full h-auto shadow-md group-hover:opacity-90 transition-opacity"
              />
              <p className="text-center text-xs text-brown mt-2 border-b border-brown inline-block mx-auto">
                チラシをPDFで見る →
              </p>
            </a>
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={849}
              className="w-full h-auto shadow-md"
            />
          )}
        </div>
      )}

      <article className="max-w-2xl mx-auto px-4 py-12">
        <div className="prose prose-sm max-w-none text-muted leading-relaxed">
          {post.content.split('\n\n').map((para, i) => {
            const match = para.match(/^\[\[PURCHASE_LINKS(?::([^\]]+))?\]\]$/);
            if (match && post.purchaseLinks && post.purchaseLinks.length > 0) {
              const group = match[1];
              const links = group
                ? post.purchaseLinks.filter(l => l.group === group)
                : post.purchaseLinks.filter(l => !l.group);
              if (links.length === 0) return null;
              return (
                <div key={i} className="my-6 border border-warm-border p-6 not-prose">
                  <p className="text-xs font-bold text-warm-text mb-4 tracking-widest">購入リンク</p>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.url} className="flex items-start gap-3 text-sm">
                        <span className="shrink-0 border border-brown text-brown text-xs px-2 py-0.5 mt-0.5">{link.shop}</span>
                        <a href={link.url} target="_blank" rel="noopener noreferrer"
                          className="text-brown border-b border-brown hover:text-brown-dark transition-colors leading-snug">
                          {link.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return <p key={i} className="mb-4 whitespace-pre-line">{para}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-warm-border flex gap-4">
          <Link href="/blog" className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
            ← ニュース一覧
          </Link>
          <Link href="/concert" className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
            コンサート情報 →
          </Link>
        </div>
      </article>
    </>
  );
}
