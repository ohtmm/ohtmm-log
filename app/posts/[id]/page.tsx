import { Metadata } from 'next';
import Content from './components/Content';
import { getPostList } from '@/app/lib/notion';
import PostTitle from '@/app/components/PostTitle';

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  return {
    title: id,
    description: '샘플 아이디',
  };
}

async function Post({ params: { id } }: Params) {
  const pages = await getPostList();
  const currentPage = pages.find((page) => page.id === id)!;
  return (
    <div>
      <PostTitle post={currentPage} isDetailPage />
    </div>
  );
}

export default Post;

export async function generateStaticParams() {
  const pages = await getPostList();
  return pages.map((page) => page.id);
}
