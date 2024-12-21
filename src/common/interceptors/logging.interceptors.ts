import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  // incluir el ID de usuario y el ID de correlación
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    // const { method, url, correlationId, ip } = request;
    // const userAgent = request.get('user-agent') || '';
    const { method, url } = request;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;
        this.logger.log(
          `${method} ${url} ${statusCode} ${Date.now() - now}ms`,
          // {
          //   correlationId,
          //   userId,
          //   userAgent,
          //   ip,
          // },
          'LoggingInterceptor',
        );
      }),
    );
  }
}
