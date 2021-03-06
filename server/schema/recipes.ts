import { RecipeTC } from '../models/recipes';

const RecipeQueries = {
  recipeById: RecipeTC.getResolver('findById'),
  recipePagination: RecipeTC.getResolver('pagination'),
  // TODO: See if we ever need recipe queries
  /*
  recipeByIds: RecipeTC.getResolver('findByIds'),
  recipeOne: RecipeTC.getResolver('findOne'),
  recipeMany: RecipeTC.getResolver('findMany'),
  recipeCount: RecipeTC.getResolver('count'),
  recipeConnection: RecipeTC.getResolver('connection'),
  */
};

const RecipeMutations = {
  recipeCreateOne: RecipeTC.getResolver('createOne'),
  // TODO: See if we ever need recipe mutations
  /*
  recipeCreateMany: RecipeTC.getResolver('createMany'),
  recipeUpdateById: RecipeTC.getResolver('updateById'),
  recipeUpdateOne: RecipeTC.getResolver('updateOne'),
  recipeUpdateMany: RecipeTC.getResolver('updateMany'),
  recipeRemoveById: RecipeTC.getResolver('removeById'),
  recipeRemoveOne: RecipeTC.getResolver('removeOne'),
  recipeRemoveMany: RecipeTC.getResolver('removeMany'),
  */
};

export { RecipeQueries, RecipeMutations };
