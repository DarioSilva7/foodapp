import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcryptjs from 'bcryptjs';
import { UserTypeEnum } from '../../auth/enums/user.type.enum';
import { DataSource, Repository } from 'typeorm';
import {
  Auth,
  BaseUser,
  ClientApp,
  ClientCustomer,
  CompanyRepresentative,
  Employee,
} from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBaseUserDto } from '../user/dto';
import { loginDto } from './dto/login-dto';
import { ValidateUserDto } from './dto/validate.user.type.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
    @InjectRepository(BaseUser)
    private readonly baseUserRepository: Repository<BaseUser>,
    @InjectRepository(ClientApp)
    private readonly clientAppRepository: Repository<ClientApp>,
    @InjectRepository(ClientCustomer)
    private readonly clientCustomerRepository: Repository<ClientCustomer>,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,

    @InjectRepository(CompanyRepresentative)
    private readonly companyRepresentativeRepository: Repository<CompanyRepresentative>,

    private dataSource: DataSource,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<ValidateUserDto | null> {
    const user = await this.usersService.findByEmail(email);
    if (user?.auth && (await bcryptjs.compare(password, user.auth.password))) {
      const { id, email, userType } = user;
      return { id, email, userType };
    }
    return null;
  }

  async login(user: loginDto): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.id, role: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUserFactory(
    baseUser: CreateBaseUserDto,
    userData: any,
    userType: UserTypeEnum,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const existingUser = await this.baseUserRepository.findOne({
        where: { email: baseUser.email },
      });
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }
      const hashedPassword = await bcryptjs.hash(userData.password, 10);

      const auth = this.authRepository.create({
        password: hashedPassword,
        isActive: true,
      });
      await queryRunner.manager.save(auth);

      const newBaseUser = this.baseUserRepository.create({
        ...baseUser,
        auth,
        userType,
      });
      await queryRunner.manager.save(newBaseUser);

      let specificUser;
      switch (userType) {
        case UserTypeEnum.USER_CLIENT:
          specificUser = this.clientAppRepository.create({
            ...userData,
            baseUser: newBaseUser,
          });
          break;
        case UserTypeEnum.USER_CUSTOMER:
          specificUser = this.clientCustomerRepository.create({
            ...userData,
            baseUser: newBaseUser,
          });
          break;
        case UserTypeEnum.EMPLOYEE:
          specificUser = this.employeeRepository.create({
            ...userData,
            baseUser: newBaseUser,
          });
          break;
        case UserTypeEnum.USER_REPRESENTATIVE:
          specificUser = this.companyRepresentativeRepository.create({
            company: userData.empresaId,
            baseUser: newBaseUser,
          });
          break;
        default:
          throw new BadRequestException('Invalid user role');
      }

      await queryRunner.manager.save(specificUser);
      await queryRunner.commitTransaction();

      return {
        message: 'User registered successfully',
        userId: newBaseUser.id,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
