import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { typeOrmConfig } from './config/typeorm.config';
import { DatabaseModule } from './database/database.module';
import { LoggingModule } from './logging/logging.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { UserModule } from './modules/user/user.module';
// import { ThrottlerModule } from '@nestjs/throttler';
// import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
// import { ThrottlerExceptionInterceptor } from './common/interceptors/throttler-exception.interceptor';
// import { ThrottlerRolesGuard } from './auth/guards/throttler-roles.guard';

@Module({
  imports: [
    UserModule,
    LoggingModule,
    AuthModule,
    CompanyModule,
    InvoiceModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    // ThrottlerModule.forRoot([
    //   {
    //     ttl: 60000,
    //     limit: 10,
    //   },
    // ]),
    DatabaseModule,
  ],
  controllers: [AppController],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: ThrottlerRolesGuard,
  //   },
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: ThrottlerExceptionInterceptor,
  //   },
  // ],
})
export class AppModule {}
// TODO
// incluir el ID de usuario y el ID de correlación
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(CorrelationIdMiddleware).forRoutes('*');
//   }
// }
