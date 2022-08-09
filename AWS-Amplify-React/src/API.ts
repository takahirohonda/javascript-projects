/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateMovieInput = {
  id?: string | null,
  title: string,
  year: string,
  director?: Array< string > | null,
  language?: Array< string > | null,
  countryOfOrigin?: Array< string > | null,
  genre: Array< Genre >,
  subgenre?: Array< Label | null > | null,
  actors?: Array< ActorInput | null > | null,
  review?: string | null,
};

export enum Genre {
  ACTION = "ACTION",
  ADVENTURE = "ADVENTURE",
  DRAMA = "DRAMA",
  HORROR = "HORROR",
  COMEDY = "COMEDY",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  CRIME = "CRIME",
  THRILLER = "THRILLER",
  ROMANCE = "ROMANCE",
  MUSICAL = "MUSICAL",
  FANTASY = "FANTASY",
  DOCUMENTARY = "DOCUMENTARY",
  HISTORICAL = "HISTORICAL",
  BIOGRAPHY = "BIOGRAPHY",
  AVANT_GARDE = "AVANT_GARDE",
  EPIC = "EPIC",
  WAR = "WAR",
}


export enum Label {
  SUPERHERO = "SUPERHERO",
  HOLLIWOOD = "HOLLIWOOD",
  INDIE = "INDIE",
  PSYCHOLOGICAL = "PSYCHOLOGICAL",
  ROMANTIC = "ROMANTIC",
  PSYCHEDELIC = "PSYCHEDELIC",
  NEWVALUE = "NEWVALUE",
  FEEL_GOOD = "FEEL_GOOD",
  GANGSTER = "GANGSTER",
  SOCIAL_COMMENTARY = "SOCIAL_COMMENTARY",
}


export type ActorInput = {
  name?: string | null,
  roleName?: string | null,
};

export type ModelMovieConditionInput = {
  title?: ModelStringInput | null,
  year?: ModelStringInput | null,
  director?: ModelStringInput | null,
  language?: ModelStringInput | null,
  countryOfOrigin?: ModelStringInput | null,
  genre?: ModelGenreInput | null,
  subgenre?: ModelLabelListInput | null,
  review?: ModelStringInput | null,
  and?: Array< ModelMovieConditionInput | null > | null,
  or?: Array< ModelMovieConditionInput | null > | null,
  not?: ModelMovieConditionInput | null,
};

export type ModelGenreInput = {
  eq?: Genre | null,
  ne?: Genre | null,
};

export type ModelLabelListInput = {
  eq?: Array< Label | null > | null,
  ne?: Array< Label | null > | null,
  contains?: Label | null,
  notContains?: Label | null,
};

export type Movie = {
  __typename: "Movie",
  id: string,
  title: string,
  year: string,
  director?: Array< string > | null,
  language?: Array< string > | null,
  countryOfOrigin?: Array< string > | null,
  genre: Array< Genre >,
  subgenre?: Array< Label | null > | null,
  actors?:  Array<Actor | null > | null,
  review?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Actor = {
  __typename: "Actor",
  name?: string | null,
  roleName?: string | null,
};

export type UpdateMovieInput = {
  id: string,
  title?: string | null,
  year?: string | null,
  director?: Array< string > | null,
  language?: Array< string > | null,
  countryOfOrigin?: Array< string > | null,
  genre?: Array< Genre > | null,
  subgenre?: Array< Label | null > | null,
  actors?: Array< ActorInput | null > | null,
  review?: string | null,
};

export type DeleteMovieInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelMovieFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  year?: ModelStringInput | null,
  director?: ModelStringInput | null,
  language?: ModelStringInput | null,
  countryOfOrigin?: ModelStringInput | null,
  genre?: ModelGenreInput | null,
  subgenre?: ModelLabelListInput | null,
  review?: ModelStringInput | null,
  and?: Array< ModelMovieFilterInput | null > | null,
  or?: Array< ModelMovieFilterInput | null > | null,
  not?: ModelMovieFilterInput | null,
};

export type ModelMovieConnection = {
  __typename: "ModelMovieConnection",
  items:  Array<Movie | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMovieMutationVariables = {
  input: CreateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type CreateMovieMutation = {
  createMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMovieMutationVariables = {
  input: UpdateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type UpdateMovieMutation = {
  updateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMovieMutationVariables = {
  input: DeleteMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type DeleteMovieMutation = {
  deleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMovieQueryVariables = {
  id: string,
};

export type GetMovieQuery = {
  getMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMoviesQueryVariables = {
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoviesQuery = {
  listMovies?:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      title: string,
      year: string,
      director?: Array< string > | null,
      language?: Array< string > | null,
      countryOfOrigin?: Array< string > | null,
      genre: Array< Genre >,
      subgenre?: Array< Label | null > | null,
      review?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMovieSubscription = {
  onCreateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMovieSubscription = {
  onUpdateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMovieSubscription = {
  onDeleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    year: string,
    director?: Array< string > | null,
    language?: Array< string > | null,
    countryOfOrigin?: Array< string > | null,
    genre: Array< Genre >,
    subgenre?: Array< Label | null > | null,
    actors?:  Array< {
      __typename: "Actor",
      name?: string | null,
      roleName?: string | null,
    } | null > | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetToDoListQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      description?: string | null,
      createdAt: string,
      name: string,
    } | null >,
  } | null,
};
