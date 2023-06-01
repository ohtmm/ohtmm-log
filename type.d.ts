interface IPost {
  id: string;
  title: string;
  createdAt: string;
  tag: string[];
  [key: string]: string | string[];
}
