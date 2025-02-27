import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { BaseUser } from './baseUser.entity';
import { Company } from './company.entity';
import { Pedido } from './pedido.entity';

@Entity()
export class Employee {
  @PrimaryColumn('uuid')
  base_user_id: string;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'base_user_id' })
  baseUser: BaseUser;

  @ManyToOne(() => Company, (company) => company.employees, {
    onDelete: 'CASCADE',
  })
  company: Company;

  @OneToMany(() => Pedido, (pedido) => pedido.employee)
  pedidos: Pedido[];
}
