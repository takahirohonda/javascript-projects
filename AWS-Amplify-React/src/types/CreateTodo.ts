/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTodoInput, ModelTodoConditionInput } from "./../API";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  input: CreateTodoInput;
  condition?: ModelTodoConditionInput | null;
}
