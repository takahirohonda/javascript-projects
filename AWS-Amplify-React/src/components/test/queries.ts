import { gql } from '@apollo/client';

export const GET_TODO_LIST = gql`
  query getToDoList {
    listTodos {
      items {
        id
        description
        createdAt
        name
      }
    }
  }
`
