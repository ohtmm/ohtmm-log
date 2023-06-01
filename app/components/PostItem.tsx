'use client';

import Link from 'next/link';

const PostItem = ({ id, createdAt, title, tag }: IPost) => {
  return (
    <div className="p-8 pl-12 border-b border-primary/20 md:pl-8">
      <h2 className="font-bold text-xl mb-2 hover:text-primary">
        <Link href={`posts/${id}`}>{title}</Link>
      </h2>
      <div className="flex justify-between">
        <div>
          {tag.map((name, idx) => (
            <span className="mr-2  text-gray text-sm font-semibold" key={`${name}-${idx}`}>
              {name}
            </span>
          ))}
        </div>
        <span className="text-gray text-sm">{createdAt}</span>
      </div>
    </div>
  );
};

export default PostItem;
