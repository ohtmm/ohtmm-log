'use client';

import dynamic from 'next/dynamic';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
  loading: () => <>Loading Code...</>,
});

type NotionContentProps = {
  recordMap: ExtendedRecordMap;
};

const NotionContent = ({ recordMap }: NotionContentProps) => {
  return (
    <div className="p-8">
      <NotionRenderer recordMap={recordMap} components={{ Code }} />
    </div>
  );
};

export default NotionContent;
