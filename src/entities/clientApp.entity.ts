import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { BaseUser } from './baseUser.entity';
import { InvoiceData } from './invoiceData.entity';
import { Invoice } from './invoice.entity';

@Entity()
export class ClientApp {
  @PrimaryColumn('uuid') // Usa el mismo ID de BaseUser
  base_user_id: string;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'base_user_id' })
  baseUser: BaseUser;

  @Column({ name: 'company_name' })
  companyName: string;

  @OneToOne(() => InvoiceData, (invoiceData) => invoiceData.clientApp, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'invoice_data_id' })
  invoiceData: InvoiceData;

  @OneToMany(() => Invoice, (invoice) => invoice.clientApp, {
    onDelete: 'NO ACTION',
  })
  invoices: Invoice[];
}
