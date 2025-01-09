import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { Food } from './food.entity';

@Entity({ name: 'pedido_food' })
export class PedidoFood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedidosFood, {
    onDelete: 'CASCADE',
  })
  pedido: Pedido;

  @ManyToOne(() => Food, (food) => food.pedidosFood, { onDelete: 'CASCADE' })
  food: Food;

  @Column({ type: 'int' }) // Cantidad de la vianda en el pedido
  quantity: number;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;
}
