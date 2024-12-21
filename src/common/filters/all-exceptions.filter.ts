// src/common/filters/all-exceptions.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Logger } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logger: Logger,
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(request),
      correlationId: 'request.correlationId',
      message: `${exception instanceof Error ? exception.message : 'Unknown error'}`,
    };

    this.logger.error(
      `Exception: ${exception instanceof Error ? exception.message : 'Unknown error'}`,
      {
        exception:
          exception instanceof Error ? exception.stack : 'No stack trace',
        correlationId: request.correlationId,
        userId: request.user?.id || 'anonymous',
        method: request.method,
        url: request.url,
        userAgent: request.get('user-agent') || '',
        ip: request.ip,
      },
      'ExceptionsFilter',
    );

    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
