/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModelSubscriptionTodoFilterInput } from "./../API";

// ====================================================
// GraphQL subscription operation: OnUpdateTodo
// ====================================================

export interface OnUpdateTodo_onUpdateTodo {
  id: string;
  name: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface OnUpdateTodo {
  onUpdateTodo: OnUpdateTodo_onUpdateTodo | null;
}

export interface OnUpdateTodoVariables {
  filter?: ModelSubscriptionTodoFilterInput | null;
}
