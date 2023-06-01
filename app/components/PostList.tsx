import { getPostList } from '../lib/notion';
import PostItem from './PostItem';

async function PostList() {
  const pages = await getPostList();

  return (
    <div className="w-full">
      {pages?.map((page) => (
        <PostItem key={page.id} {...page} />
      ))}
    </div>
  );
}

export default PostList;
