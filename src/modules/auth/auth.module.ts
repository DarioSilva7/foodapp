import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseUser } from 'src/entities/baseUser.entity';
import { RolesGuard } from 'src/auth/guards/roles.guard';
// import {
//   AuthRepository,
//   ClientAppRepository,
//   ClientCustomerRepository,
//   CompanyRepresentativeRepository,
//   EmployeeRepository,
//   BaseUserRepository,
// } from 'src/repositories';
import { Auth } from 'src/entities/auth.entity';
import { ClientCustomer } from 'src/entities/clientCustomer.entity';
import { ClientApp } from 'src/entities/clientApp.entity';
import { Employee } from 'src/entities/employee.entity';
import { CompanyRepresentative } from 'src/entities/companyRepresentative.entity';
import { envs } from 'src/config/envs';

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
