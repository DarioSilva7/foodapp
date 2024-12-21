import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { InvoiceData } from './index';
import { Invoice } from './invoice.entity';
import { User } from './user.entity';

@Entity()
export class ClientApp extends User {
  @Column()
  companyName: string;

  @OneToOne(() => InvoiceData)
  @JoinColumn()
  invoiceData: InvoiceData;

  @OneToMany(() => Invoice, (invoice) => invoice.clientApp)
  invoices: Invoice[];

  constructor() {
    super();
    this.role = 'client_app';
  }
}
