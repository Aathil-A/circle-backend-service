import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserInput,
  LoginInput,
  UpdateUserInput,
} from '../../schema/graphql.schema';
import { UserService } from '../service/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  async createUser(@Args('input') input: CreateUserInput) {
    return await this.userService.create(input);
  }

  @Query()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Query()
  async getUser(@Args('id') id: string) {
    return await this.userService.findOne({ where: id });
  }

  @Mutation()
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ) {
    return await this.userService.update(id, input);
  }

  @Mutation()
  async deleteUser(@Args('id') id: string) {
    return await this.userService.delete(id);
  }

  @Query()
  async loginUser(@Args('input') input: LoginInput) {
    return await this.userService.findOne({
      email: input.email,
    });
  }
}
