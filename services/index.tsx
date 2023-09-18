import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api-ap-northeast-1.hygraph.com/v2/clk8e2ic11d9s01t21nryhevl/master';

const graphQLClient = new GraphQLClient(endpoint);

export const getPosts = async () => {
  const query = `
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data.postsConnection.edges.map((edge: any) => edge.node);
};

export const getCategories = async () => {
  const query = `
    query MyQuery {
      categoriesConnection {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data.categoriesConnection.edges.map((edge: any) => edge.node);
};

export const getPostBySlug = async (slug: string) => {
  const query = `
    query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        content {
          text
        }
        featuredImage {
          url
        }
        createdAt
        author {
          name
          bio
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
      }
    }  
  `;

  const variables = {
    slug,
  };

  const data = await graphQLClient.request(query, variables);
  return data.post;
};

export const getCategoryPost = async (slug: string) => {
  const query = `
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  const data = await graphQLClient.request(query, variables);
  return data.postsConnection.edges.map((edge: any) => edge.node);
};