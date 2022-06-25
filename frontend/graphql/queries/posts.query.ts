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
        category {
          name
        }
      }
    }
  }
`;
