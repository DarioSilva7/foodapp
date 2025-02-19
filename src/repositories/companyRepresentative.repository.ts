import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CompanyRepresentative } from '../entities/companyRepresentative.entity';

@Injectable()
export class CompanyRepresentativeRepository extends Repository<CompanyRepresentative> {
  constructor(private dataSource: DataSource) {
    super(CompanyRepresentative, dataSource.createEntityManager());
  }

  // Add custom methods here if needed
}
