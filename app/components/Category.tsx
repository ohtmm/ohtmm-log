import Link from 'next/link';
import { getDatabaseTags } from '../lib/notion';

async function Category() {
  const tags = await getDatabaseTags();
  return (
    <ul className="md:pr-0 md:w-full md:flex md:flex-wrap md:pb-0">
      {tags?.map((tag) => (
        <li
          key={tag.id}
          className="text-white bg-primary/60 hover:text-white hover:bg-primary hover:font-bold w-fit px-2 text-l text-center rounded-xl cursor-pointer m-4 md:m-2"
        >
          <Link href={`/posts/tag?name=${tag.name.toLowerCase()}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Category;
