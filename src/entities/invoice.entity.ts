import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  // OneToOne,
  // JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
// import { PaymentReceipt } from './paymentReceipt.entity';
import { Company } from './company.entity';
import { ClientApp } from './clientApp.entity';
import { ClientCustomer } from './clientCustomer.entity';
import { PaymentReceipt } from './paymentReceipt.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'tax_number' })
  taxNumber: string;

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number;

  @Column()
  fecha: Date;

  //TODO -> crear entidad invoice_statuses
  @Column()
  status: string; // 'pendiente', 'pagada', 'vencida'

  @ManyToOne(() => Company, (company) => company.invoices)
  company: Company;

  @ManyToOne(() => ClientApp, (clientApp) => clientApp.invoices, {
    onDelete: 'NO ACTION',
  })
  clientApp: ClientApp;

  @ManyToOne(
    () => ClientCustomer,
    (clientCustomer) => clientCustomer.invoices,
    { onDelete: 'NO ACTION' },
  )
  clientCustomer: ClientCustomer;

  @OneToOne(() => PaymentReceipt, { onDelete: 'NO ACTION' })
  @JoinColumn()
  paymentReceipt: PaymentReceipt;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
