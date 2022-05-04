import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class CarInput {
  @Field(() => String)
  id: string;
}

@ObjectType()
export class Car {
  @Field(() => String)
  id: string;

  @Field(() => String)
  brand: string;

  @Field(() => String)
  model: string;

  @Field(() => Number)
  year: number;
}
