/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodo
// ====================================================

export interface GetTodo_getTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface GetTodo {
  getTodo: GetTodo_getTodo | null;
}

export interface GetTodoVariables {
  id: string;
}
