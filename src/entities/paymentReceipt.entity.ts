// src/facturacion/entities/comprobante-pago.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity()
export class PaymentReceipt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numeroTransaccion: string;

  @Column()
  fechaPago: Date;

  @Column()
  metodoPago: string;

  @Column()
  archivoUrl: string;

  @OneToOne(() => Invoice, (invoice) => invoice.paymentReceipt)
  invoice: Invoice;
}
