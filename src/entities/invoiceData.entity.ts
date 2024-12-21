import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Company } from './company.entity';
import { ClientApp } from './clientApp.entity';

@Entity()
export class InvoiceData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  razonSocial: string;

  @Column()
  cuit: string;

  @Column()
  direccionFiscal: string;

  @Column()
  condicionIVA: string;

  @OneToOne(() => Company, (empresa) => empresa.invoiceData)
  company: Company;

  @OneToOne(() => ClientApp, (clientApp) => clientApp.invoiceData)
  clientApp: ClientApp;
}
