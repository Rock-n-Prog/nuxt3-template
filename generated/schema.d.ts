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

export type Query = {
  __typename?: 'Query';
  authorById?: Maybe<Author>;
  recipeById?: Maybe<Recipe>;
};

export type QueryAuthorByIdArgs = {
  _id: Scalars['MongoID'];
};

export type QueryRecipeByIdArgs = {
  _id: Scalars['MongoID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  _id: Scalars['MongoID'];
  author: Scalars['MongoID'];
  createdAt?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};
