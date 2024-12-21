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
} from './index';
import { Invoice } from './invoice.entity';

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
    (representante) => representante.company,
  )
  representantes: CompanyRepresentative[];

  @OneToMany(() => DiningRoom, (diningroom) => diningroom.company)
  comedores: DiningRoom[];

  @OneToMany(() => Invoice, (invoice) => invoice.company)
  invoices: Invoice[];

  @OneToOne(() => InvoiceData)
  @JoinColumn()
  invoiceData: InvoiceData;
}
