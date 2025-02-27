import { Injectable, NotFoundException } from '@nestjs/common';

import { BaseUser } from '../../entities/baseUser.entity';
import { BaseUserRepository } from '../../repositories/index';

import { CreateBaseUserDto } from './dto/create-base-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: BaseUserRepository) {}

  async create(createUserDto: CreateBaseUserDto): Promise<BaseUser> {
    const { ...rest } = createUserDto;
    return await this.userRepository.save(rest);
  }

  async getUserType(userId: string): Promise<string> {
    const { userType } = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!userType) {
      throw new NotFoundException('User not found');
    }

    return userType;
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(
    email: string,
  ): Promise<Pick<BaseUser, 'id' | 'email' | 'userType' | 'auth'>> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['auth'],
      select: {
        id: true,
        email: true,
        userType: true,
        auth: { password: true },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log('🚀 ~ UserService ~ update ~ updateUserDto:', updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
