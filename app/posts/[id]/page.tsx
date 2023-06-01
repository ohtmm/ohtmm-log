import Content from './components/Content';
import Title from './components/Title';

type Params = {
  params: {
    id: string;
  };
};

const Post = async ({ params: { id } }: Params) => {
  return (
    <div>
      <Title />
    </div>
  );
};

export default Post;
