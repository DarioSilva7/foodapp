import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ClientApp } from '../entities/clientApp.entity';

@Injectable()
export class ClientAppRepository extends Repository<ClientApp> {
  constructor(private dataSource: DataSource) {
    super(ClientApp, dataSource.createEntityManager());
  }

  // Add custom methods here if needed
}
