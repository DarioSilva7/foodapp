import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseUser } from './baseUser.entity';
import { Company } from './company.entity';
import { Pedido } from './pedido.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (company) => company.employees, {
    onDelete: 'CASCADE',
  })
  company: Company;

  @OneToMany(() => Pedido, (pedido) => pedido.employee)
  pedidos: Pedido[];

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_base_user' })
  baseUser: BaseUser;
}
