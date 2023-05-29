import Link from 'next/link';
import { TAG_LIST } from '../constants/tags';

const Category = () => {
  return (
    <ul className="md:pr-0 md:w-full md:flex md:flex-wrap md:pb-0">
      {TAG_LIST.map((tag) => (
        <li
          key={tag.id}
          className={`${
            tag.type === 'Language' ? 'bg-primary text-white' : 'bg-white text-primary'
          } w-fit px-2 text-l text-center rounded-xl cursor-pointer m-4 md:m-2`}
        >
          <Link href={`/posts/tag?name=${tag.name.toLowerCase()}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
