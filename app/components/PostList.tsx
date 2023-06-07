import { getPostList } from '../lib/notion';
import PostTitle from './PostTitle';

async function PostList() {
  const pages = await getPostList();

  return (
    <div className="w-full">
      {pages?.map((page) => (
        <PostTitle key={page.id} post={page} />
      ))}
    </div>
  );
}

export default PostList;
