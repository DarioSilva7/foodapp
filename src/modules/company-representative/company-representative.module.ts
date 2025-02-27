import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyRepresentative } from '../../entities/index';
import { CompanyRepresentativeRepository } from '../../repositories/index';

import { CompanyRepresentativeController } from './company-representative.controller';
import { CompanyRepresentativeService } from './company-representative.service';

@Module({
  controllers: [CompanyRepresentativeController],
  imports: [TypeOrmModule.forFeature([CompanyRepresentative])],
  providers: [CompanyRepresentativeService, CompanyRepresentativeRepository],
})
export class CompanyRepresentativeModule {}
