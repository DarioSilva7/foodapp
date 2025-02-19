import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from '../entities/index';
import { InjectRepository } from '@nestjs/typeorm'; // Importar el decorador InjectRepository

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>, // Inyectar el repositorio directamente
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
