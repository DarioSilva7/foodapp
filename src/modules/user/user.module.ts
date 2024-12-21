import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { ClientApp, CompanyRepresentative, Employee } from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      ClientApp,
      CompanyRepresentative,
      Employee,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
