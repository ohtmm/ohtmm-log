interface IPost {
  id: string;
  title: string;
  createdAt: string;
  tags: string[];
  [key: string]: string | string[];
}
