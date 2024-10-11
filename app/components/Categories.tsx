'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Categories({ tags }: { tags: ITag[] }) {
  const params = useSearchParams();
  const selectedTag = params.get('tag') ?? 'All';
  return (
    <div className="w-56 bg-primary/20 p-4 rounded-xl md:w-full">
      <ul className="md:pr-0 md:w-full md:flex md:flex-wrap md:pb-0">
        <li
          value="All"
          className={`${
            selectedTag === 'All' ? 'text-primary/60 bg-white' : 'text-white bg-primary/60'
          } hover:text-white hover:bg-primary hover:font-bold w-fit px-2 text-l text-center rounded-xl cursor-pointer m-4 md:m-2`}
        >
          <Link href={`?tag=All`}>All</Link>
        </li>
        {tags?.map((tag) => (
          <li
            key={tag.id}
            value={tag.name}
            className={`${
              selectedTag === tag.name ? 'text-primary/60 bg-white' : 'text-white bg-primary/60'
            }  hover:text-white hover:bg-primary hover:font-bold w-fit px-2 text-l text-center rounded-xl cursor-pointer m-4 md:m-2`}
          >
            <Link href={`?tag=${tag.name}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
