import Content from './components/Content';
import Title from './components/Title';

type Params = {
  params: {
    postId: string;
  };
};

const Post = async () => {

  return (
    <div>
      <Title />
      {/* <Content /> */}
    </div>
  );
};

export default Post;
