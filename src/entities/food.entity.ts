import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from './pedido.entity';
import { PedidoFood } from './pedido.food.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('simple-array')
  dietaryRestrictions: string[];

  @Column({ default: true })
  isAvailableThisWeek: boolean; //vianda disponible para la semana actual

  @OneToMany(() => PedidoFood, (pedidoFood) => pedidoFood.food)
  pedidosFood: Pedido[];
}
