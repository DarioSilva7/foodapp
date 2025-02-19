import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import {
  Auth,
  BaseUser,
  ClientApp,
  ClientCustomer,
  Permission,
  Company,
  CompanyRepresentative,
  DiningRoom,
  Employee,
  Food,
  Invoice,
  InvoiceData,
  PaymentReceipt,
  Pedido,
  PedidoFood,
  InvoiceTaxDetail,
} from '../entities/index';
import { envs } from './envs';
import { DataSource, DataSourceOptions } from 'typeorm';
import { InvoiceStatuses } from 'src/entities/invoiceStatuses.entity';
import { InvoiceStatusHistory } from 'src/entities/invoiceStatusHistory.entity';

export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: envs.db.host,
  port: envs.db.port,
  password: envs.db.password,
  username: envs.db.username,
  database: envs.db.database,
  entities: [
    Auth,
    BaseUser,
    ClientApp,
    ClientCustomer,
    Company,
    CompanyRepresentative,
    DiningRoom,
    Employee,
    Food,
    Invoice,
    InvoiceData,
    InvoiceStatuses,
    InvoiceStatusHistory,
    InvoiceTaxDetail,
    PaymentReceipt,
    Pedido,
    PedidoFood,
    Permission,
  ],
  migrations: [path.join(__dirname, '../database/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations_history',
  synchronize: envs.node_env == 'development',
  logging: ['error', 'schema'],
};

export const dataSource = new DataSource(typeOrmConfig);
