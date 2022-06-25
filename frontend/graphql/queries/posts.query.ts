import gql from "graphql-tag";

export const postsQuery = gql`
  query Posts {
    Posts {
      docs {
        id
        title
        user {
          name
        }
        author {
          name
        }
        category {
          name
        }
        content
        displayImage {
          url
        }
      }
    }
  }
`;
