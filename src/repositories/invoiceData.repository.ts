import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { InvoiceData } from '../entities';

@Injectable()
export class InvoiceDataRepository extends Repository<InvoiceData> {
  constructor(private dataSource: DataSource) {
    super(InvoiceData, dataSource.createEntityManager());
  }

  // Add custom methods here if needed
}
