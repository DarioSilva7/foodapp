import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import {
  InvoiceData,
  Employee,
  DiningRoom,
  CompanyRepresentative,
  Invoice,
} from './index';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  @OneToMany(
    () => CompanyRepresentative,
    (representative) => representative.company,
  )
  representatives: CompanyRepresentative[];

  @OneToMany(() => DiningRoom, (diningroom) => diningroom.company)
  diningRoom: DiningRoom[];

  @OneToMany(() => Invoice, (invoice) => invoice.company)
  invoices: Invoice[];

  @OneToOne(() => InvoiceData, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invoice_data_id' })
  invoiceData: InvoiceData;
}
