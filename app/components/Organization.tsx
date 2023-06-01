import Category from './Category';
import Search from './Search';

const Organization = async () => {
  return (
    <div className="w-56 bg-primary/20 p-4 rounded-xl md:w-full">
      {/* <Search /> */}
      {/* @ts-expect-error Async Server Component */}
      <Category />
    </div>
  );
};

export default Organization;
