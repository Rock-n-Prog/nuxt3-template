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
};

export type Car = {
  __typename?: 'Car';
  brand: Scalars['String'];
  id: Scalars['String'];
  model: Scalars['String'];
  year: Scalars['Float'];
};

export type CarInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  car: Car;
  recipe: Recipe;
};

export type QueryCarArgs = {
  carInput: CarInput;
};

export type QueryRecipeArgs = {
  recipeInput: RecipeInput;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  title: Scalars['String'];
};

export type RecipeInput = {
  id: Scalars['String'];
};
