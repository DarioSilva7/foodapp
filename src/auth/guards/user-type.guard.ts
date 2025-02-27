import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserService } from '../../modules/user/user.service';
import { UserTypeEnum } from '../enums/user.type.enum';

@Injectable()
export class UserTypeGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: {
      userId: string;
      email: string;
      role: UserTypeEnum;
    } = request.user; // Se asume que ya está autenticado
    console.log('🚀 ~ UserTypeGuard ~ canActivate ~ user:', user);
    const requiredType =
      this.reflector.getAllAndOverride<UserTypeEnum[]>('userType', [
        context.getHandler(),
        context.getClass(),
      ]) || [];

    if (requiredType.includes(UserTypeEnum.USER)) return true;

    if (!user || requiredType.length === 0) {
      return false;
    }
    return requiredType.includes(user.role);
  }
}
