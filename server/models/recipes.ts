import { Schema, model } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  },
  {
    collection: 'recipes',
  },
);

RecipeSchema.plugin(timestamps);

RecipeSchema.index({ createdAt: 1, updatedAt: 1 });

const Recipe = model('Recipe', RecipeSchema);
const RecipeTC = composeWithMongoose(Recipe);

export { RecipeSchema, Recipe, RecipeTC };
