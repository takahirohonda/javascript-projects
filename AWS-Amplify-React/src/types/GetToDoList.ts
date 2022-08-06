/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetToDoList
// ====================================================

export interface GetToDoList_listTodos_items {
  id: string;
  description: string | null;
  createdAt: any;
  name: string;
}

export interface GetToDoList_listTodos {
  items: (GetToDoList_listTodos_items | null)[];
}

export interface GetToDoList {
  listTodos: GetToDoList_listTodos | null;
}
