import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDataRepository } from 'src/repositories';
import { ClientCustomerRepository } from 'src/repositories/clientCustomer.repository';

import { ClientCustomer } from '../../entities/index';

import { ClientCustomerController } from './client-customer.controller';
import { ClientCustomerService } from './client-customer.service';

@Module({
  controllers: [ClientCustomerController],
  imports: [TypeOrmModule.forFeature([ClientCustomer])],
  providers: [
    ClientCustomerService,
    ClientCustomerRepository,
    InvoiceDataRepository,
  ],
})
export class ClientCustomerModule {}
