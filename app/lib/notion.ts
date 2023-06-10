import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';

const notionIssuesDatabase = 'aded321e5162420e88ed00aea8ab45e5';
const notionAPI = new NotionAPI();

const convertPageProperties = (page: PageObjectResponse): IPost => {
  const { id, created_time, properties } = page;
  const res: Partial<IPost> = {};

  Object.entries(properties).forEach(([key, propertyVal]) => {
    let value: string | string[] = '';

    switch (propertyVal.type) {
      case 'title': {
        value = propertyVal.title.map((title) => title.plain_text).join(' ');
        break;
      }
      case 'multi_select': {
        value = propertyVal.multi_select.map((select) => select.name);
        break;
      }
      case 'created_time': {
        value = new Date(propertyVal.created_time).toLocaleDateString();
      }
    }
    res[key] = value;
  });

  return {
    id,
    tag: res.tag || [],
    title: res.title || '',
    createdAt: res.createdAt || created_time,
  };
};

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });

export const getDatabaseTags = async () => {
  try {
    const databaseData = await notionClient.databases.retrieve({
      database_id: notionIssuesDatabase,
    });

    const databaseProperties = databaseData.properties;

    let tags: ITag[] = [];
    Object.values(databaseProperties).forEach((propertyVal) => {
      if (propertyVal.type === 'multi_select') {
        const tagOptions = propertyVal.multi_select.options;
        tagOptions.forEach((option) => {
          const { color, ...propsWithoutColor } = option;
          tags.push(propsWithoutColor);
        });
      }
    });
    return tags;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPostList = async () => {
  const databaseQuery = await notionClient.databases.query({
    database_id: notionIssuesDatabase,
  });

  const pages: IPost[] = databaseQuery.results.map((pageData) => {
    const page = pageData as PageObjectResponse;
    return convertPageProperties(page);
  });

  return pages;
};

export const getPostDetail = async (pageID: string) => {
  const recordMap = await notionAPI.getPage(pageID);
  return recordMap;
};
