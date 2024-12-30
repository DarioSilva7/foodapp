import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PaymentReceipt } from './paymentReceipt.entity';
import { Company } from './company.entity';
import { ClientApp } from './clientApp.entity';
import { ClientCustomer } from './clientCustomer.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: string;

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number;

  @Column()
  fecha: Date;

  @Column()
  estado: string; // 'pendiente', 'pagada', 'vencida'

  @ManyToOne(() => Company, (company) => company.invoices)
  company: Company;

  @ManyToOne(() => ClientApp, (clientApp) => clientApp.invoices)
  clientApp: ClientApp;

  @ManyToOne(() => ClientCustomer, (clientCustomer) => clientCustomer.invoices)
  clientCustomer: ClientCustomer;

  @OneToOne(() => PaymentReceipt)
  @JoinColumn()
  paymentReceipt: PaymentReceipt;
}
