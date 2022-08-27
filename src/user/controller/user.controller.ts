import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body('input') input: any) {
    return await this.userService.create(input);
  }

  @Get('/')
  async getUsers() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  // async updateUser(
  //     @Args('id') id: string,
  //     @Args('input') input: UpdateUserInput
  // ) {
  //     return await this.userService.update(id, input)
  // }

  // async deleteUser(@Args('id') id: string) {
  //     return await this.userService.delete(id);
  // }
}
