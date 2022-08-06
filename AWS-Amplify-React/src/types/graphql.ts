import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type DeleteTodoInput = {
  id: Scalars['ID'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelSubscriptionTodoFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionTodoFilterInput>>>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionTodoFilterInput>>>;
};

export type ModelTodoConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
  description?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoConditionInput>>>;
};

export type ModelTodoConnection = {
  __typename?: 'ModelTodoConnection';
  items: Array<Maybe<Todo>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTodoFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTodoFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTodoFilterInput>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: DeleteTodoInput;
};


export type MutationUpdateTodoArgs = {
  condition?: InputMaybe<ModelTodoConditionInput>;
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo?: Maybe<Todo>;
  listTodos?: Maybe<ModelTodoConnection>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryListTodosArgs = {
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onDeleteTodo?: Maybe<Todo>;
  onUpdateTodo?: Maybe<Todo>;
};


export type SubscriptionOnCreateTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};


export type SubscriptionOnDeleteTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};


export type SubscriptionOnUpdateTodoArgs = {
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['AWSDateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type UpdateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type GetToDoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToDoListQuery = { __typename?: 'Query', listTodos?: { __typename?: 'ModelTodoConnection', items: Array<{ __typename?: 'Todo', id: string, description?: string | null, createdAt: any, name: string } | null> } | null };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type DeleteTodoMutationVariables = Exact<{
  input: DeleteTodoInput;
  condition?: InputMaybe<ModelTodoConditionInput>;
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type GetTodoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTodoQuery = { __typename?: 'Query', getTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type ListTodosQueryVariables = Exact<{
  filter?: InputMaybe<ModelTodoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type ListTodosQuery = { __typename?: 'Query', listTodos?: { __typename?: 'ModelTodoConnection', nextToken?: string | null } | null };

export type OnCreateTodoSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
}>;


export type OnCreateTodoSubscription = { __typename?: 'Subscription', onCreateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type OnUpdateTodoSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
}>;


export type OnUpdateTodoSubscription = { __typename?: 'Subscription', onUpdateTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };

export type OnDeleteTodoSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionTodoFilterInput>;
}>;


export type OnDeleteTodoSubscription = { __typename?: 'Subscription', onDeleteTodo?: { __typename?: 'Todo', id: string, name: string, description?: string | null, createdAt: any, updatedAt: any } | null };


export const GetToDoListDocument = gql`
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
    `;

/**
 * __useGetToDoListQuery__
 *
 * To run a query within a React component, call `useGetToDoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetToDoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetToDoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetToDoListQuery(baseOptions?: Apollo.QueryHookOptions<GetToDoListQuery, GetToDoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetToDoListQuery, GetToDoListQueryVariables>(GetToDoListDocument, options);
      }
export function useGetToDoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetToDoListQuery, GetToDoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetToDoListQuery, GetToDoListQueryVariables>(GetToDoListDocument, options);
        }
export type GetToDoListQueryHookResult = ReturnType<typeof useGetToDoListQuery>;
export type GetToDoListLazyQueryHookResult = ReturnType<typeof useGetToDoListLazyQuery>;
export type GetToDoListQueryResult = Apollo.QueryResult<GetToDoListQuery, GetToDoListQueryVariables>;
export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTodoDocument = gql`
    query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
      }
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const ListTodosDocument = gql`
    query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    nextToken
  }
}
    `;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: Apollo.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
      }
export function useListTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, options);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = Apollo.QueryResult<ListTodosQuery, ListTodosQueryVariables>;
export const OnCreateTodoDocument = gql`
    subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnCreateTodoSubscription__
 *
 * To run a query within a React component, call `useOnCreateTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useOnCreateTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateTodoSubscription, OnCreateTodoSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateTodoSubscription, OnCreateTodoSubscriptionVariables>(OnCreateTodoDocument, options);
      }
export type OnCreateTodoSubscriptionHookResult = ReturnType<typeof useOnCreateTodoSubscription>;
export type OnCreateTodoSubscriptionResult = Apollo.SubscriptionResult<OnCreateTodoSubscription>;
export const OnUpdateTodoDocument = gql`
    subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnUpdateTodoSubscription__
 *
 * To run a query within a React component, call `useOnUpdateTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useOnUpdateTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateTodoSubscription, OnUpdateTodoSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateTodoSubscription, OnUpdateTodoSubscriptionVariables>(OnUpdateTodoDocument, options);
      }
export type OnUpdateTodoSubscriptionHookResult = ReturnType<typeof useOnUpdateTodoSubscription>;
export type OnUpdateTodoSubscriptionResult = Apollo.SubscriptionResult<OnUpdateTodoSubscription>;
export const OnDeleteTodoDocument = gql`
    subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnDeleteTodoSubscription__
 *
 * To run a query within a React component, call `useOnDeleteTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteTodoSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useOnDeleteTodoSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteTodoSubscription, OnDeleteTodoSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnDeleteTodoSubscription, OnDeleteTodoSubscriptionVariables>(OnDeleteTodoDocument, options);
      }
export type OnDeleteTodoSubscriptionHookResult = ReturnType<typeof useOnDeleteTodoSubscription>;
export type OnDeleteTodoSubscriptionResult = Apollo.SubscriptionResult<OnDeleteTodoSubscription>;