import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Company, Pedido } from './index';

@Entity()
export class DiningRoom {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.diningRoom, {
    onDelete: 'CASCADE',
  })
  company: Company;

  @OneToMany(() => Pedido, (pedido) => pedido.diningRoom)
  pedidos: Pedido[];

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
