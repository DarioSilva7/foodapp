import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Auth } from '../entities/index';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
  ) {}
  hola() {
    return 'Hola';
  }
}
// import { Injectable } from '@nestjs/common';
// import { DataSource, Repository } from 'typeorm';
// import { Auth } from 'src/entities';

// @Injectable()
// export class ClientCustomerRepository extends Repository<Auth> {
//   constructor(private dataSource: DataSource) {
//     super(Auth, dataSource.createEntityManager());
//   }

//   // Add custom methods here if needed
// }
