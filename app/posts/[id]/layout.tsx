export const metadata = {
  title: 'ohtmm-post',
  description: 'ohtmm의 개발 포스트',
};

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-4/5 mx-auto min-h-screen p-8 md:w-11/12 ">{children}</div>;
}
