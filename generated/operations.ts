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

export type RecipeByIdQueryVariables = Exact<{
  id: Scalars['MongoID'];
}>;

export type RecipeByIdQuery = {
  __typename?: 'Query';
  recipeById?: { __typename?: 'Recipe'; _id: any; title: string } | null;
};

export type RecipePaginationQueryVariables = Exact<{
  page: Scalars['Int'];
}>;

export type RecipePaginationQuery = {
  __typename?: 'Query';
  recipePagination?: {
    __typename?: 'RecipePagination';
    count?: number | null;
    items?: Array<{ __typename?: 'Recipe'; _id: any; title: string }> | null;
  } | null;
};

export const RecipeByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RecipeById' },
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
 * __useRecipeByIdQuery__
 *
 * To run a query within a Vue component, call `useRecipeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecipeByIdQuery({
 *   id: // value for 'id'
 * });
 */
export function useRecipeByIdQuery(
  variables:
    | RecipeByIdQueryVariables
    | VueCompositionApi.Ref<RecipeByIdQueryVariables>
    | ReactiveFunction<RecipeByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<RecipeByIdQuery, RecipeByIdQueryVariables>(
    RecipeByIdDocument,
    variables,
    options,
  );
}
export function useRecipeByIdLazyQuery(
  variables:
    | RecipeByIdQueryVariables
    | VueCompositionApi.Ref<RecipeByIdQueryVariables>
    | ReactiveFunction<RecipeByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipeByIdQuery, RecipeByIdQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<RecipeByIdQuery, RecipeByIdQueryVariables>(
    RecipeByIdDocument,
    variables,
    options,
  );
}
export type RecipeByIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  RecipeByIdQuery,
  RecipeByIdQueryVariables
>;
export const RecipePaginationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RecipePagination' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recipePagination' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
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
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useRecipePaginationQuery__
 *
 * To run a query within a Vue component, call `useRecipePaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipePaginationQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecipePaginationQuery({
 *   page: // value for 'page'
 * });
 */
export function useRecipePaginationQuery(
  variables:
    | RecipePaginationQueryVariables
    | VueCompositionApi.Ref<RecipePaginationQueryVariables>
    | ReactiveFunction<RecipePaginationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>> = {},
) {
  return VueApolloComposable.useQuery<RecipePaginationQuery, RecipePaginationQueryVariables>(
    RecipePaginationDocument,
    variables,
    options,
  );
}
export function useRecipePaginationLazyQuery(
  variables:
    | RecipePaginationQueryVariables
    | VueCompositionApi.Ref<RecipePaginationQueryVariables>
    | ReactiveFunction<RecipePaginationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>
    | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>>
    | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecipePaginationQuery, RecipePaginationQueryVariables>> = {},
) {
  return VueApolloComposable.useLazyQuery<RecipePaginationQuery, RecipePaginationQueryVariables>(
    RecipePaginationDocument,
    variables,
    options,
  );
}
export type RecipePaginationQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  RecipePaginationQuery,
  RecipePaginationQueryVariables
>;
