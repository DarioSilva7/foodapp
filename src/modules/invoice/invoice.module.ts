import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice, PaymentReceipt } from 'src/entities';

import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, PaymentReceipt])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
