import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
    const query = {
        query: `query getAllPosts {
          posts {
            nodes {
              title
              date
              slug
              excerpt(format: RENDERED)
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }`
    }

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;

    return allPosts;
}