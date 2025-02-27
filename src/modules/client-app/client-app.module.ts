import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientApp } from 'src/entities';

import {
  AuthRepository,
  ClientAppRepository,
  InvoiceDataRepository,
} from '../../repositories/index';

import { ClientAppController } from './client-app.controller';
import { ClientAppService } from './client-app.service';

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
