import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'ohtmm.log',
  description: 'ohtmm의 개발 블로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white min-h-screen">
        <div className="w-4/5 md:w-11/12 mx-auto min-h-fit">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
