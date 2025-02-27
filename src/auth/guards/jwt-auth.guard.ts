import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { Observable, firstValueFrom } from 'rxjs';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const result = super.canActivate(context);
    return result instanceof Observable ? firstValueFrom(result) : result;
  }

  handleRequest(err: any, user: any, info: any, _context: ExecutionContext) {
    if (err || !user) {
      if (info instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Token expired, log in again');
      }

      if (info instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedException('Invalid token or incorrect signature');
      }

      throw new UnauthorizedException('Unauthorized access');
    }

    return user;
  }
}
