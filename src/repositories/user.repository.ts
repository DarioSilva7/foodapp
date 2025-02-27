import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { BaseUser } from '../entities/baseUser.entity';

@Injectable()
export class BaseUserRepository extends Repository<BaseUser> {
  constructor(private dataSource: DataSource) {
    super(BaseUser, dataSource.createEntityManager());
  }

  // Add custom methods here if needed
}
