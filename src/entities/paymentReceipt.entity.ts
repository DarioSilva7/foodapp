import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity()
export class PaymentReceipt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'transaction_number' })
  numeroTransaccion: string;

  @Column({ name: 'payment_date' })
  fechaPago: Date;

  @Column({ name: 'payment_method' })
  metodoPago: string;

  @Column({ name: 'url_file' })
  archivoUrl: string;

  @OneToOne(() => Invoice, (invoice) => invoice.paymentReceipt)
  invoice: Invoice;
}
