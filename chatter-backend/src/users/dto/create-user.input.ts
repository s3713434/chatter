import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User Email' })
  email: string;

  @Field(() => String, { description: 'User password' })
  password: string;
}
