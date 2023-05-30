import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Montserrat, Noto_Sans_KR } from 'next/font/google';

export const metadata = {
  title: 'ohtmm.log',
  description: 'ohtmm의 개발 블로그',
};

const montserrat = Montserrat({ weight: ['300', '600', '800'], subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ weight: ['300', '400', '700'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={`bg-white min-h-screen`}
        style={{ fontFamily: `${montserrat.style.fontFamily}, ${notoSansKr.style.fontFamily}` }}
      >
        <div className="w-4/5 md:w-11/12 mx-auto min-h-fit">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
