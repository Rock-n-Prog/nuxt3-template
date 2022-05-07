import { SchemaComposer } from 'graphql-compose';
import { AuthorQueries, AuthorMutations } from './authors';
import { RecipeQueries, RecipeMutations } from './recipes';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...AuthorQueries,
  ...RecipeQueries,
});

schemaComposer.Mutation.addFields({
  ...AuthorMutations,
  ...RecipeMutations,
});

export default schemaComposer.buildSchema();
