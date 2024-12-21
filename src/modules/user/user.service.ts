import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ClientApp,
  CompanyRepresentative,
  Employee,
} from '../../entities/index';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(ClientApp)
    private readonly clientAppRepository: Repository<ClientApp>,
    @InjectRepository(CompanyRepresentative)
    private readonly companyRepresentativeRepository: Repository<CompanyRepresentative>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log('🚀 ~ UserService ~ create ~ createUserDto:', createUserDto);

    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    let user: User;

    switch (createUserDto.role) {
      case 'client_app':
        user = this.clientAppRepository.create(createUserDto);
        break;
      case 'company_representative':
        user = this.companyRepresentativeRepository.create(createUserDto);
        break;
      case 'employee':
        user = this.employeeRepository.create(createUserDto);
        break;
      default:
        user = this.userRepository.create(createUserDto);
    }

    return await this.userRepository.save(user);
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log('🚀 ~ UserService ~ update ~ updateUserDto:', updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
