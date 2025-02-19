import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { InvoiceData } from 'src/entities/invoiceData.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, InvoiceData])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
