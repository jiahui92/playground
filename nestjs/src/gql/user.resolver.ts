import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.dto';

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  getUsers(): User[] {
    return [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Doe', age: 30 },
    ];
  }
}
