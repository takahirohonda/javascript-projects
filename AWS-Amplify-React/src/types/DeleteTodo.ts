/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteTodoInput, ModelTodoConditionInput } from "./../API";

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_deleteTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface DeleteTodo {
  deleteTodo: DeleteTodo_deleteTodo | null;
}

export interface DeleteTodoVariables {
  input: DeleteTodoInput;
  condition?: ModelTodoConditionInput | null;
}
