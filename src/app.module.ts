import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { LoggingModule } from './logging/logging.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import {  } from './entities/user.entity';
import {
  Auth,
  User,
  ClientApp,
  Company,
  CompanyRepresentative,
  DiningRoom,
  Employee,
  Food,
  Invoice,
  InvoiceData,
  PaymentReceipt,
  Pedido,
} from './entities';
import { envs } from './config/envs';

@Module({
  imports: [
    UserModule,
    LoggingModule,
    AuthModule,
    CompanyModule,
    InvoiceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: envs.db.port,
      password: envs.db.password,
      username: envs.db.username,
      database: envs.db.database,
      entities: [
        User,
        Auth,
        ClientApp,
        Company,
        CompanyRepresentative,
        DiningRoom,
        Employee,
        Food,
        Invoice,
        InvoiceData,
        PaymentReceipt,
        Pedido,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
// TODO
// incluir el ID de usuario y el ID de correlación
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(CorrelationIdMiddleware).forRoutes('*');
//   }
// }
