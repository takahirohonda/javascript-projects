/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTodoInput, ModelTodoConditionInput } from "./../API";

// ====================================================
// GraphQL mutation operation: UpdateTodo
// ====================================================

export interface UpdateTodo_updateTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface UpdateTodo {
  updateTodo: UpdateTodo_updateTodo | null;
}

export interface UpdateTodoVariables {
  input: UpdateTodoInput;
  condition?: ModelTodoConditionInput | null;
}
