import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
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

const Recipe = mongoose.model('Recipe', RecipeSchema);
const RecipeTC = composeWithMongoose(Recipe);

export { RecipeSchema, Recipe, RecipeTC };
