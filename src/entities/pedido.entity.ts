import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Employee } from './employee.entity';
import { DiningRoom } from './diningRoom.entity';
import { ClientCustomer } from './clientCustomer.entity';
import { PedidoFood } from './pedido.food.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'order_date' })
  orderDate: Date;

  // TODO -> crear entidad pedido_statuses
  @Column()
  status: string;

  @ManyToOne(() => Employee, (employee) => employee.pedidos, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @ManyToOne(() => ClientCustomer, (clientCustomer) => clientCustomer.pedidos, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  clientCustomer: ClientCustomer;

  @ManyToOne(() => DiningRoom, (diningRoom) => diningRoom.pedidos, {
    onDelete: 'CASCADE',
  })
  diningRoom: DiningRoom;

  @OneToMany(() => PedidoFood, (pedidoFood) => pedidoFood.pedido)
  pedidosFood: PedidoFood[];

  @Column({ default: false })
  isWeeklyOrder: boolean;
}
