import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: '東京藝術大学別科卒業後、イタリア留学。コンクール入賞多数。名古屋を拠点にソロ・室内楽・オーケストラで活動するチェリスト坂上諒のプロフィール。',
};

export default function ProfilePage() {
  return (
    <>
      <section className="bg-warm-text text-cream py-20 text-center">
        <p className="section-sub text-cream/60">Profile</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide">プロフィール</h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative h-[480px] md:h-[560px]">
          <Image
            src="/images/sakaue-ryo-cellist-nagoya-2.jpg"
            alt="坂上諒 チェリスト 名古屋 愛知県"
            fill
            className="object-cover object-top"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl mb-1 tracking-widest">坂上 諒</h2>
          <p className="text-muted text-sm mb-6 tracking-widest">Ryo Sakaue, Cello</p>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              東京藝術大学別科チェロ専攻卒業後、イタリア サンタチェチーリア国立アカデミアに留学、Pavia Cello Academyを卒業。
            </p>
            <p>
              ベーテン音楽コンクール第1位。徳島音楽コンクール金賞及びグランプリ受賞。日本クラシック音楽コンクール第2位（最高位）など入賞多数。東本願寺及び山田貞夫音楽財団より奨学金を授与。
            </p>
            <p>
              大井剛史指揮 名古屋フィルハーモニー交響楽団、秋山和慶指揮 徳島国民文化祭記念管弦楽団、JASTAストリングオーケストラ、レーベンスルストフィルハーモニー管弦楽団、エウフォニカ管弦楽団等とドヴォルザーク、シューマン、ハイドンの第2番、エルガー、サンサーンスのチェロ協奏曲、ブラームス、ヴィヴァルディの二重協奏曲を共演。
            </p>
            <p>
              サンタヴィットーリア国際音楽祭、リスト音楽院セミナー、Garda Lake International Music Academy Masterに参加。
            </p>
            <p>
              これまでにチェロを杉山知子、林良一、林俊昭、中木健二、渡邉辰紀、E.ディンド、室内楽を池松宏、漆原朝子、江口玲、川崎和憲、後藤龍伸、松原勝也、C.ファビアーノの各氏に師事。M.ペレーニ、P.ミュレール、F.ヘルメルソン、A.ポロのマスタークラスを受講。
            </p>
            <p>
              現在はソロ、室内楽、オーケストラへの客演、レコーディング等、様々な活動をしている。
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="https://www.youtube.com/@ryosakauecello7257" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
              YouTube →
            </a>
            <a href="https://www.instagram.com/ryosakau/" target="_blank" rel="noopener noreferrer"
               className="text-sm text-brown border-b border-brown hover:text-brown-dark transition-colors">
              Instagram →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative h-64">
                <Image
                  src={`/images/sakaue-ryo-cellist-nagoya-${n}.jpg`}
                  alt={`坂上諒 チェリスト 名古屋 ${n}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
