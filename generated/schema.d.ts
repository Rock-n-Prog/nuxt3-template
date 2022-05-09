export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['MongoID'];
  createdAt?: Maybe<Scalars['Date']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CreateOneRecipeInput = {
  author: Scalars['MongoID'];
  createdAt?: InputMaybe<Scalars['Date']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type CreateOneRecipePayload = {
  __typename?: 'CreateOneRecipePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Recipe>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FilterFindManyRecipeCreatedAtOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FilterFindManyRecipeInput = {
  AND?: InputMaybe<Array<FilterFindManyRecipeInput>>;
  OR?: InputMaybe<Array<FilterFindManyRecipeInput>>;
  _id?: InputMaybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyRecipeOperatorsInput>;
  author?: InputMaybe<Scalars['MongoID']>;
  createdAt?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRecipeOperatorsInput = {
  _id?: InputMaybe<FilterFindManyRecipe_IdOperatorsInput>;
  createdAt?: InputMaybe<FilterFindManyRecipeCreatedAtOperatorsInput>;
};

export type FilterFindManyRecipe_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['MongoID']>;
  gte?: InputMaybe<Scalars['MongoID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
  lt?: InputMaybe<Scalars['MongoID']>;
  lte?: InputMaybe<Scalars['MongoID']>;
  ne?: InputMaybe<Scalars['MongoID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  recipeCreateOne?: Maybe<CreateOneRecipePayload>;
};

export type MutationRecipeCreateOneArgs = {
  record: CreateOneRecipeInput;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  itemCount?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  authorById?: Maybe<Author>;
  recipeById?: Maybe<Recipe>;
  recipePagination?: Maybe<RecipePagination>;
};

export type QueryAuthorByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryRecipeByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryRecipePaginationArgs = {
  filter?: InputMaybe<FilterFindManyRecipeInput>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SortFindManyRecipeInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  _id: Scalars['MongoID'];
  author: Scalars['MongoID'];
  createdAt?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

/** List of items with pagination. */
export type RecipePagination = {
  __typename?: 'RecipePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Recipe>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export enum SortFindManyRecipeInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}
