interface IPost {
  id: string;
  title: string;
  createdAt: string;
  tag: string[];
  [key: string]: string | string[];
}

interface ITag {
  id: string;
  name: string;
}
