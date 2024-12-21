import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice, PaymentReceipt } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, PaymentReceipt])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
