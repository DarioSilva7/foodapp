import { Module } from '@nestjs/common';
import { ClientCustomerService } from './client-customer.service';
import { ClientCustomerController } from './client-customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientCustomer } from '../../entities/index';
import { InvoiceDataRepository } from 'src/repositories';
import { ClientCustomerRepository } from 'src/repositories/clientCustomer.repository';

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
