import { gql } from '@apollo/client';

export const GET_TODO_LIST = gql`
  query GetToDoList {
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
