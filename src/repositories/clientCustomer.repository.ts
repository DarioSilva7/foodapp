import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ClientCustomer } from '../entities/clientCustomer.entity';

@Injectable()
export class ClientCustomerRepository extends Repository<ClientCustomer> {
  constructor(private dataSource: DataSource) {
    super(ClientCustomer, dataSource.createEntityManager());
  }

  // Add custom methods here if needed
}
