import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'invoice_status_history' })
export class InvoiceStatusHistory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  id_invoice: string;
  @Column()
  id_invoice_prev_status: number;
  @Column()
  id_invoice_current_status: number;

  @UpdateDateColumn({ name: 'change_date' })
  changeDate: Date;

  @Column()
  observation: string;
}
