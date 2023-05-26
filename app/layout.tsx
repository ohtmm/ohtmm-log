import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Ohtmm-log',
  description: 'ohtmm의 개발 로그',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-lightPink min-h-screen ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
