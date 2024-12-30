// src/common/interceptors/throttler-exception.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrottlerException } from '@nestjs/throttler';

@Injectable()
export class ThrottlerExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof ThrottlerException) {
          return throwError(
            () =>
              new HttpException(
                'Too Many Requests',
                HttpStatus.TOO_MANY_REQUESTS,
              ),
          );
        }
        return throwError(() => err);
      }),
    );
  }
}
