import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
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

export type RecipeQueryVariables = Exact<{
  id: Scalars['MongoID'];
}>;

export type RecipeQuery = {
  __typename?: 'Query';
  recipeById?: { __typename?: 'Recipe'; _id: any; title: string } | null;
};

export const RecipeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Recipe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'MongoID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recipeById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useRecipeQuery__
 *
 * To run a query within a Vue component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecipeQuery({
 *   id: // value for 'id'
 * });
 */
export function useRecipeQuery(
  variables:
    | RecipeQueryVariables
    | VueCompositionApi.Ref<RecipeQueryVariables>
    | ReactiveFunction<RecipeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, variables, options);
}
export function useRecipeLazyQuery(
  variables:
    | RecipeQueryVariables
    | VueCompositionApi.Ref<RecipeQueryVariables>
    | ReactiveFunction<RecipeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeQuery, RecipeQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, variables, options);
}
export type RecipeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  RecipeQuery,
  RecipeQueryVariables
>;
