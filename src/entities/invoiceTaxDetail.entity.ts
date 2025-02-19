import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity({ name: 'invoice_tax_detail' })
export class InvoiceTaxDetail {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'tax_number' })
  taxNumber: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ name: 'invoice_date' })
  invoiceDate: Date;

  @OneToOne(() => Invoice, (invoice) => invoice.taxDetail, {
    onDelete: 'CASCADE',
  })
  invoice: Invoice;
}
