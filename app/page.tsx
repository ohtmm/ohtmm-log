import { Suspense } from 'react';
import PostList from './components/PostList';
import Profile from './components/Profile';
import { getPostList, getDatabaseTags } from './lib/notion';
import Loader from './components/Loader';
import Categories from './components/Categories';

export default async function Home() {
  const pages = await getPostList();

  const tags = await getDatabaseTags();

  return (
    <main className="px-6 md:px-0 mx-auto min-h-screen">
      <div className="mt-8">
        <Profile />
        <div className="p-8 rounded-xl flex gap-8 md:block md:p-4 md:mt-8">
          {tags && <Categories tags={tags} />}
          <Suspense fallback={<Loader />}>
            <PostList posts={pages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
