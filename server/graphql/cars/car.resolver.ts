import { Resolver, Query, Arg } from 'type-graphql';
import { Car, CarInput } from './schema';

// TODO: Move mock data
const carData = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camri',
    year: 2006,
  },
  {
    id: '2',
    brand: 'Fort',
    model: 'F-150',
    year: 2012,
  },
];

@Resolver()
export default class CarResolver {
  @Query(() => Car)
  car(@Arg('carInput', () => CarInput) carInput: CarInput) {
    return carData.find(car => car.id === carInput.id);
  }
}
