import { AuthorTC } from '../models/authors';

const AuthorQueries = {
  authorById: AuthorTC.getResolver('findById'),
  authorPagination: AuthorTC.getResolver('pagination'),
  // TODO: See if we ever need author queries
  /*
  authorByIds: AuthorTC.getResolver('findByIds'),
  authorOne: AuthorTC.getResolver('findOne'),
  authorMany: AuthorTC.getResolver('findMany'),
  authorCount: AuthorTC.getResolver('count'),
  authorConnection: AuthorTC.getResolver('connection'),
  */
};

const AuthorMutations = {
  authorCreateOne: AuthorTC.getResolver('createOne'),
  // TODO: See if we ever need author mutations
  /*
  authorCreateMany: AuthorTC.getResolver('createMany'),
  authorUpdateById: AuthorTC.getResolver('updateById'),
  authorUpdateOne: AuthorTC.getResolver('updateOne'),
  authorUpdateMany: AuthorTC.getResolver('updateMany'),
  authorRemoveById: AuthorTC.getResolver('removeById'),
  authorRemoveOne: AuthorTC.getResolver('removeOne'),
  authorRemoveMany: AuthorTC.getResolver('removeMany'),
  */
};

export { AuthorQueries, AuthorMutations };
