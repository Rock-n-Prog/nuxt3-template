import type { NonEmptyArray } from 'type-graphql';
import recipe from './recipes/recipe.resolver';

// TODO: Do we need this disable?
// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [recipe];

export default resolvers;
