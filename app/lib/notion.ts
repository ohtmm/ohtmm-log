import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notionIssuesDatabase = 'aded321e5162420e88ed00aea8ab45e5';

const convertPageProperties = (page: PageObjectResponse): IPost => {
  const { id, created_time, properties } = page;
  const res: Partial<IPost> = {};

  Object.keys(properties).forEach((key) => {
    const propertyVal = properties[key];
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

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export const getDatabaseTags = async () => {
  try {
    const databaseData = await notionClient.databases.retrieve({
      database_id: notionIssuesDatabase,
    });

    const databaseProperties = databaseData.properties;

    let tags: ITag[] = [];
    Object.keys(databaseProperties).map((key) => {
      const propertyVal = databaseProperties[key];
      if (propertyVal.type === 'multi_select') {
        const tagOptions = propertyVal.multi_select.options;
        tagOptions.map((option) => {
          const { color, ...withoutColor } = option;
          tags.push(withoutColor);
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
