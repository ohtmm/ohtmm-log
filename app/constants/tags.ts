export const TAG_LIST: TTag[] = [
  { id: 0, type: 'Library', name: 'ReactJS' },
  {
    id: 1,
    type: 'Language',
    name: 'Typescript',
  },
  {
    id: 2,
    type: 'Language',
    name: 'Javascript',
  },
  {
    id: 3,
    type: 'Library',
    name: 'Tanstack-query',
  },
  {
    id: 4,
    type: 'Library',
    name: 'Redux',
  },
  {
    id: 5,
    type: 'Library',
    name: 'Zustand',
  },
];

export type TTag = { id: number; type: TTagType; name: string };

export type TTagType = 'Language' | 'Library';
