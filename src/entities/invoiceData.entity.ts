import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import { ClientApp } from './clientApp.entity';
import { ClientCustomer } from './clientCustomer.entity';
import { Company } from './company.entity';

@Entity()
export class InvoiceData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'razon_social' })
  razonSocial: string;

  @Column()
  cuit: string;

  @Column({ name: 'address_fiscal' })
  direccionFiscal: string;

  @Column({ name: 'condition_iva' })
  condicionIVA: string;

  @OneToOne(() => Company, (company) => company.invoiceData)
  company: Company;

  @OneToOne(() => ClientApp, (clientApp) => clientApp.invoiceData)
  clientApp: ClientApp;

  @OneToOne(
    () => ClientCustomer,
    (clientCustomer) => clientCustomer.invoiceData,
  )
  clientCustomer: ClientCustomer;
}
