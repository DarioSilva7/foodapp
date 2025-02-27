import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { BaseUser } from './baseUser.entity';
import { Invoice } from './invoice.entity';
import { Pedido } from './pedido.entity';

import { InvoiceData } from './index';

@Entity()
export class ClientCustomer {
  @PrimaryColumn('uuid')
  base_user_id: string;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'base_user_id' })
  baseUser: BaseUser;

  @OneToOne(() => InvoiceData, (invoiceData) => invoiceData.clientCustomer, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'invoice_data_id' })
  invoiceData: InvoiceData;

  @OneToMany(() => Invoice, (invoice) => invoice.clientCustomer)
  invoices: Invoice[];

  @OneToMany(() => Pedido, (pedido) => pedido.clientCustomer)
  pedidos: Pedido[];
}
