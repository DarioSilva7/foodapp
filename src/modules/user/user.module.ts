import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  BaseUser,
  ClientApp,
  CompanyRepresentative,
  Employee,
} from '../../entities/index';
import { BaseUserRepository } from '../../repositories';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BaseUser,
      ClientApp,
      CompanyRepresentative,
      Employee,
      ClientApp,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, BaseUserRepository],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
