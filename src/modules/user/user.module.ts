import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BaseUser,
  ClientApp,
  CompanyRepresentative,
  Employee,
} from 'src/entities';
import { BaseUserRepository } from 'src/repositories';

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
