/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModelSubscriptionTodoFilterInput } from "./../API";

// ====================================================
// GraphQL subscription operation: OnDeleteTodo
// ====================================================

export interface OnDeleteTodo_onDeleteTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface OnDeleteTodo {
  onDeleteTodo: OnDeleteTodo_onDeleteTodo | null;
}

export interface OnDeleteTodoVariables {
  filter?: ModelSubscriptionTodoFilterInput | null;
}
