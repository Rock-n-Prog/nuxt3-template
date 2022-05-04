import type { NonEmptyArray } from 'type-graphql';
import car from './cars/car.resolver';

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [car];

export default resolvers;
