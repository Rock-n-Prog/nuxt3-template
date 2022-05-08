import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: 'authors',
  },
);

AuthorSchema.plugin(timestamps);

AuthorSchema.index({ createdAt: 1, updatedAt: 1 });

const Author = mongoose.model('Author', AuthorSchema);
const AuthorTC = composeWithMongoose(Author);

export { AuthorSchema, Author, AuthorTC };
