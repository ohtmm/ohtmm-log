'use client';

import Link from 'next/link';

const PostItem = ({ id = 1 }: { id?: number }) => {
  return (
    <div className="p-8 pl-12 border-b border-primary/20 cursor-pointer md:pl-8 hover:text-primary">
      <h2 className="font-bold text-xl ">
        <Link href={`posts/${id}`}>[error] 중복 렌더링이 발생했다!</Link>
      </h2>
      <p>버그가 어떤 이벤트에서 발생하는지 명확하게, 뾰족하게 만들자</p>
    </div>
  );
};

export default PostItem;
