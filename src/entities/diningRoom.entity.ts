import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Company, Pedido } from './index';

@Entity()
export class DiningRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.comedores)
  company: Company;

  @OneToMany(() => Pedido, (pedido) => pedido.diningroom)
  pedidos: Pedido[];
}
