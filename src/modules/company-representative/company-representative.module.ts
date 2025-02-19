import { Module } from '@nestjs/common';
import { CompanyRepresentativeService } from './company-representative.service';
import { CompanyRepresentativeController } from './company-representative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepresentative } from '../../entities/index';
import { CompanyRepresentativeRepository } from '../../repositories/index';

@Module({
  controllers: [CompanyRepresentativeController],
  imports: [TypeOrmModule.forFeature([CompanyRepresentative])],
  providers: [CompanyRepresentativeService, CompanyRepresentativeRepository],
})
export class CompanyRepresentativeModule {}
