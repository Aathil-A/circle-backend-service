import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserResolver,
  ]
})
export class UserModule {}
