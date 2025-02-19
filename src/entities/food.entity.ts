import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PedidoFood } from './pedido.food.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('increment')
  id: number;

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
  pedidosFood: PedidoFood[];
}
