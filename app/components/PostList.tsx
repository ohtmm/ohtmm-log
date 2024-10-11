'use client';

import { useSearchParams } from 'next/navigation';
import PostTitle from './PostTitle';

async function PostList({ posts }: { posts: IPost[] }) {
  const params = useSearchParams();
  const tag = params.get('tag') ?? 'All';
  const tagged = posts.filter((page) => page.tag.includes(tag));

  return (
    <div className="w-full">
      {tag === 'All' && posts.map((page) => <PostTitle key={page.id} post={page} />)}
      {tagged?.map((page) => (
        <PostTitle key={page.id} post={page} />
      ))}
      {tag !== 'All' && tagged.length === 0 && (
        <div className="w-full py-10 text-center text-lg font-semibold">해당 게시글이 없습니다.</div>
      )}
    </div>
  );
}

export default PostList;
