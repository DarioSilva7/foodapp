import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../modules/user/user.service';

@Injectable()
export class UserTypeGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Se asume que ya está autenticado
    const requiredType = this.reflector.get<string>(
      'userType',
      context.getHandler(),
    );

    if (!user || !requiredType) {
      return false;
    }

    const userType = await this.userService.getUserType(user.id);
    return userType === requiredType;
  }
}
