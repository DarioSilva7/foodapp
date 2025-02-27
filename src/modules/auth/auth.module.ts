import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { envs } from 'src/config/envs';
import { Auth } from 'src/entities/auth.entity';
import { BaseUser } from 'src/entities/baseUser.entity';
import { ClientApp } from 'src/entities/clientApp.entity';
import { ClientCustomer } from 'src/entities/clientCustomer.entity';
import { CompanyRepresentative } from 'src/entities/companyRepresentative.entity';
import { Employee } from 'src/entities/employee.entity';
import { UserModule } from 'src/modules/user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
// import {
//   AuthRepository,
//   ClientAppRepository,
//   ClientCustomerRepository,
//   CompanyRepresentativeRepository,
//   EmployeeRepository,
//   BaseUserRepository,
// } from 'src/repositories';

@Module({
  imports: [
    UserModule, // para usar UserService y BaseUserRepository
    PassportModule,
    TypeOrmModule.forFeature([
      Auth,
      BaseUser,
      CompanyRepresentative,
      ClientCustomer,
      ClientApp,
      Employee,
    ]),
    JwtModule.register({
      secret: envs.jwt_secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RolesGuard,
    // AuthRepository,
    // BaseUserRepository,
    // ClientAppRepository,
    // ClientCustomerRepository,
    // EmployeeRepository,
    // CompanyRepresentativeRepository,
  ],
  controllers: [AuthController],
  exports: [AuthService, RolesGuard],
})
export class AuthModule {}
