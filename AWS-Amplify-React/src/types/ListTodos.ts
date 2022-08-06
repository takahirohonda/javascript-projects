/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModelTodoFilterInput } from "./../API";

// ====================================================
// GraphQL query operation: ListTodos
// ====================================================

export interface ListTodos_listTodos_items {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface ListTodos_listTodos {
  items: (ListTodos_listTodos_items | null)[];
  nextToken: string | null;
}

export interface ListTodos {
  listTodos: ListTodos_listTodos | null;
}

export interface ListTodosVariables {
  filter?: ModelTodoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}
