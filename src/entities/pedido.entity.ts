import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Employee } from './employee.entity';
import { DiningRoom } from './diningRoom.entity';
import { Food } from './food.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderDate: Date;

  @Column()
  status: string;

  @ManyToOne(() => Employee, (employee) => employee.pedidos)
  employee: Employee;

  @ManyToOne(() => DiningRoom, (diningroom) => diningroom.pedidos)
  diningroom: DiningRoom;

  @ManyToMany(() => Food, (food) => food.pedidos)
  @JoinTable()
  viandas: Food[];
}
