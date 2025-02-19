import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Company } from './company.entity';
import { ClientApp } from './clientApp.entity';
import { ClientCustomer } from './clientCustomer.entity';
import { PaymentReceipt } from './paymentReceipt.entity';
import { InvoiceStatuses } from './invoiceStatuses.entity';
import { InvoiceTaxDetail } from './invoiceTaxDetail.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => InvoiceTaxDetail, (taxDetail) => taxDetail.invoice, {
    cascade: true,
  })
  @JoinColumn()
  taxDetail: InvoiceTaxDetail;

  @Column({ name: 'invoice_url' })
  invoiceUrl: string;

  //TODO -> crear entidad invoice_statuses
  @OneToOne(() => InvoiceStatuses, { onDelete: 'SET NULL' })
  @JoinColumn()
  invoiceStatus: InvoiceStatuses;

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

  @ManyToMany(() => PaymentReceipt)
  @JoinTable()
  receipts: PaymentReceipt[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
