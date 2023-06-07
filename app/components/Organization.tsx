import Category from './Category';
import Search from './Search';

async function Organization() {
  return (
    <div className="w-56 bg-primary/20 p-4 rounded-xl md:w-full">
      {/* <Search /> */}
      {/* @ts-expect-error async server component */}
      <Category />
    </div>
  );
}

export default Organization;
