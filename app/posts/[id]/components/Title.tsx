const Title = ({ title, createdAt }: IPost) => {
  return (
    <div className="border-b border-primary/20 p-4 bg-black text-white rounded-xl">
      <h1 className="pl-4 text-3xl font-bold mb-4">{title}</h1>
      <p className="pl-8 text-primary/60">{createdAt}</p>
    </div>
  );
};

export default Title;
