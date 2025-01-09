import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BaseUser } from './baseUser.entity';
import { InvoiceData } from './invoiceData.entity';
import { Invoice } from './invoice.entity';

@Entity()
export class ClientApp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_base_user' })
  baseUser: BaseUser;

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
