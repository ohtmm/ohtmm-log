import { Suspense } from 'react';
import Organization from './components/Organization';
import PostList from './components/PostList';
import Profile from './components/Profile';
import { getPostList } from './lib/notion'; 
import Loader from './components/Loader';

export default async function Home() {
  const pages = await getPostList();
  return (
    <main className="px-6 mx-auto min-h-screen">
      <div className="mt-8">
        <Profile />
        <div className="p-8 rounded-xl flex gap-8 md:block md:p-4 md:mt-8">
          <Organization />
          <Suspense fallback={<Loader />}>
            <PostList posts={pages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
