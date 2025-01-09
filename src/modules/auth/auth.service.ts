// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcryptjs from 'bcryptjs';
import { CreateBaseUserDto } from '../user/dto/create-base-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcryptjs.compare(password, user.auth.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { auth, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateBaseUserDto) {
    const hashedPassword = await bcryptjs.hash(createUserDto.password, 10);
    const user = await this.usersService.create({
      ...createUserDto,
      auth: { password: hashedPassword },
    });
    return this.login(user);
  }
}
