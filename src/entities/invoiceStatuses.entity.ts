import { InvoiceStatusesEnum } from 'src/modules/invoice/enums/invoiceStatuses.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'invoice_statuses' })
export class InvoiceStatuses {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'enum',
    enum: InvoiceStatusesEnum,
    default: InvoiceStatusesEnum.CREADA,
  })
  status: InvoiceStatusesEnum;

  @Column()
  description: string;

  @Column()
  order: number;

  @Column({ type: 'boolean', default: true })
  enabled: boolean;
}
