import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int        
    $after: String    
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $reviewsFirst: Int, $reviewsAfter: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(first: $reviewsFirst, after: $reviewsAfter) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export const GET_ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;