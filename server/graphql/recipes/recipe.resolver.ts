import { Resolver, Query, Arg } from 'type-graphql';
import { Recipe, RecipeInput } from './schema';

// TODO: Move mock data
const recipeData = [
  {
    id: '1',
    title: 'Tofu Tao',
  },
  {
    id: '2',
    title: 'Chili',
  },
];

@Resolver()
class RecipeResolver {
  @Query(() => Recipe)
  recipe(@Arg('recipeInput', () => RecipeInput) recipeInput: RecipeInput) {
    return recipeData.find(recipe => recipe.id === recipeInput.id);
  }
}

export default RecipeResolver;
