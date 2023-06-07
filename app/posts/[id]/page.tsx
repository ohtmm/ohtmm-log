import { Metadata } from 'next';
import { getPostDetail, getPostList } from '@/app/lib/notion';
import PostTitle from '@/app/components/PostTitle';
import NotionContent from './components/Content';

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  const pages = await getPostList();
  const currentPage = pages.find((page) => page.id === id)!;
  return {
    title: currentPage.title,
    description: currentPage.createdAt,
  };
}

async function Post({ params: { id } }: Params) {
  const pages = await getPostList();
  const recordMap = await getPostDetail(id);

  const currentPage = pages.find((page) => page.id === id)!;
  return (
    <div>
      <PostTitle post={currentPage} isDetailPage />
      <NotionContent recordMap={recordMap} />
    </div>
  );
}

export default Post;

export async function generateStaticParams() {
  const pages = await getPostList();
  return pages.map((page) => page.id);
}
