import { Entity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { InvoiceData } from './index';
import { Invoice } from './invoice.entity';
import { User } from './user.entity';

@Entity()
export class ClientCustomer extends User {
  @OneToOne(() => InvoiceData)
  @JoinColumn()
  invoiceData: InvoiceData;

  @OneToMany(() => Invoice, (invoice) => invoice.clientCustomer)
  invoices: Invoice[];

  constructor() {
    super();
    this.role = 'client_customer';
  }
}
