import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { InvoiceData } from 'src/entities/invoiceData.entity';

import { UserModule } from '../user/user.module';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Company, InvoiceData])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
