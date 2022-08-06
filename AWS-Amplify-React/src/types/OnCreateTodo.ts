/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModelSubscriptionTodoFilterInput } from "./../API";

// ====================================================
// GraphQL subscription operation: OnCreateTodo
// ====================================================

export interface OnCreateTodo_onCreateTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface OnCreateTodo {
  onCreateTodo: OnCreateTodo_onCreateTodo | null;
}

export interface OnCreateTodoVariables {
  filter?: ModelSubscriptionTodoFilterInput | null;
}
