import Organization from './components/Organization';
import PostList from './components/PostList';
import Profile from './components/Profile';

export default function Home() {
  return (
    <main className="px-6 mx-auto min-h-screen">
      <div className="mt-8">
        <Profile />
        <div className="p-8 rounded-xl flex gap-8 md:block md:p-4 md:mt-8">
          <Organization />
          {/* @ts-expect-error Async Server Component */}
          <PostList />
        </div>
      </div>
    </main>
  );
}
