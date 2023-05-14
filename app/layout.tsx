import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';
import './globals.css';

export const metadata = {
  title: 'Ohtmm-log',
  description: 'ohtmm의 개발 로그',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='bg-white'>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
