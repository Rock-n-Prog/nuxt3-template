import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
class RecipeInput {
  @Field(() => String)
  id: string;
}

@ObjectType()
class Recipe {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  // TODO: Creation date

  // TODO: Author

  // TODO: Ingredients

  // TODO: Preparation (general entity + step list)
}

export { RecipeInput, Recipe };
