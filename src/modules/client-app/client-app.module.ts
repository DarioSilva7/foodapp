import { Module } from '@nestjs/common';
import { ClientAppService } from './client-app.service';
import { ClientAppController } from './client-app.controller';
import {
  AuthRepository,
  ClientAppRepository,
  InvoiceDataRepository,
} from '../../repositories/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientApp } from 'src/entities';

@Module({
  controllers: [ClientAppController],
  imports: [TypeOrmModule.forFeature([ClientApp])],
  providers: [
    ClientAppService,
    ClientAppRepository,
    InvoiceDataRepository,
    AuthRepository,
  ],
})
export class ClientAppModule {}
