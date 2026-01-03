const RICH_TEXT_FIELDS = `
json 
links {
  assets {
    block {
      sys {
        id
      }
      url
      description
    }
  }
  entries {
    block {
      __typename
      sys {
        id
      }

      ... on LinkFeature{
        title
        image {
          url
        }
        description
        link
      }
    }
  }
}
`;

const EVENT_GRAPHQL_FIELDS = `
  ... on Event{
    sys {
      id
    }
    title
    image {
      url
    }
    date
    locationName
    description
    linkOutText
    linkOutUrl
  }`;

const PAGE_GRAPHQL_FIELDS = `
    slug
    title
    pageContent {
        ${RICH_TEXT_FIELDS}
    }
`;

function generateQueryFilterByTags(tags) {
  return `where: {tags_contains_some: [${tags.map((t) => `"${t}"`)}]}`;
  // return `where: {AND: [{tags_contains_some: [${tags.map(
  //   (t) => `"${t}"`
  // )}]}, {storyPage: true}]}`;
}

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getEvents() {
  const entries = await fetchGraphQL(`query {
  eventCollection(order: date_ASC) {
    items {
      ${EVENT_GRAPHQL_FIELDS}
    }
  }
}
`);
  const res = entries?.data?.eventCollection?.items;
  console.log(res);
  return res;
}

export async function getPostWithSlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        pageCollection(where: {slug: "${slug}"}, preview: ${
      preview ? "true" : "false"
    }) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractPost(entries);
}

export async function getPostsWithTags(tags, preview) {
  const fetchResponse = await fetchGraphQL(
    `query {
      pageCollection(${
        tags ? generateQueryFilterByTags(tags) : PAGE_FILTER_STORY
      }) {
        items {
          ${PAGE_THUMBNAIL_FIELDS}
        }
      }
    }`
  );
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getNavbar(preview) {
  const navBarId = "5xWzigIIJ6qipw9rOOvpCd";
  const navbar = await fetchGraphQL(
    `query {
      navbar(id:"${navBarId}", preview:${preview ? "true" : "false"}) {
        pages
      }
    }`
  );
  return navbar?.data?.navbar;
}

export async function getHomepage(preview) {
  const homepage = await fetchGraphQL(
    `query {
        page(id: "5LiupOWCbQVebgIegz8mzY", preview: ${
          preview ? "true" : "false"
        }) {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }`,
    preview
  );
  return homepage?.data?.page;
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}
export async function getPageContentOnlyBySlug(slug, preview = false) {
  const entries = await fetchGraphQL(
    `query {
        pageCollection(where: {slug: "${slug}"}, preview: ${
      preview ? "true" : "false"
    }) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  console.log(entries);
  return extractPost(entries);
}
