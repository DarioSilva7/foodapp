import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import {
  Auth,
  User,
  ClientApp,
  Company,
  CompanyRepresentative,
  DiningRoom,
  Employee,
  Food,
  Invoice,
  InvoiceData,
  PaymentReceipt,
  Pedido,
} from '../entities/index';
import { envs } from './envs';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ClientCustomer } from 'src/entities/clientCustomer.entity';

export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: envs.db.port,
  password: envs.db.password,
  username: envs.db.username,
  database: envs.db.database,
  entities: [
    User,
    Auth,
    ClientApp,
    Company,
    CompanyRepresentative,
    DiningRoom,
    Employee,
    Food,
    Invoice,
    InvoiceData,
    PaymentReceipt,
    Pedido,
    ClientCustomer,
  ],
  migrations: [path.join(__dirname, '../database/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations_history',
  synchronize: envs.node_env !== 'production',
  logging: true,
};

export const dataSource = new DataSource(typeOrmConfig);
