import Link from 'next/link';

type PostItemProps = {
  post: IPost;
  isDetailPage?: boolean;
};

const PostTitle = ({ post: { id, createdAt, title, tag }, isDetailPage }: PostItemProps) => {
  return (
    <div
      className={`${
        isDetailPage
          ? 'border-b border-primary/20 p-8 bg-black text-white rounded-xl'
          : 'p-8 pl-12 border-b border-primary/20 md:pl-8'
      }`}
    >
      {isDetailPage ? (
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
      ) : (
        <h2 className="font-bold text-xl mb-2 hover:text-primary">
          <Link href={`posts/${id}`}>{title}</Link>
        </h2>
      )}

      <div className="flex justify-between">
        <div>
          {tag.map((name, idx) => (
            <span className="mr-2 text-gray text-sm font-semibold" key={`${name}-${idx}`}>
              {name}
            </span>
          ))}
        </div>
        <span className={isDetailPage ? 'text-primary/60' : 'text-gray text-sm'}>{createdAt}</span>
      </div>
    </div>
  );
};

export default PostTitle;
